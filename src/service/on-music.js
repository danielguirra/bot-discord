const prefix = "*";
const ytdl = require("ytdl-core");
const queue = new Map();
const Youtube = require("simple-youtube-api");

const youtube = new Youtube(process.env.YOUTOKEN);

global.bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    return;
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ")[1];
  const url = args.replace(/<(.+)>/g, 1);

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send("Você tem que estar em um canal de voz");
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "Não tenho permissão para me juntar a esse canal"
    );
  }
  try {
    var video = await youtube.getVideo(url);
  } catch (error) {
    try {
      var videos = await youtube.searchVideos(url, 1);
      var video = await youtube.getVideoByID(videos[0].id);
    } catch (err) {
      return message.channel.send("Não posso buscar por isso");
    }
  }
  console.log(video);

  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`,
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true,
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} Foi adicionado a fila!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send("Tem que estar em um canal de voz para pular!");
  if (!serverQueue)
    return message.channel.send("Não há música que eu possa pular!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "Você tem que estar em um canal de voz para parar a música!"
    );

  if (!serverQueue) return message.channel.send("Tem nada para pular");

  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", (reason) => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", (error) => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Vai tocar: **${song.title}**`);
}
