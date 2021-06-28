const prefix = "*";
const ytdl = require("ytdl-core");
const queue = new Map();
const Youtube = require("simple-youtube-api");
const Util = require('util')

const youtube = new Youtube(process.env.YOUTOKEN);

global.bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (
    message.content.startsWith(`${prefix}play`) ||
    message.content.startsWith(`${prefix}p`)
  ) {
    message.react("🤙");
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    message.react("👌");
    message.react("⏭");
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}clear`)) {
    message.react("🧹");
    clear(message, serverQueue);
    return;
  } else {
    return;
  }
});

function getEmbed(title, description) {
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle(title)
    .setDescription(description);

  return embed;
}

async function execute(message, serverQueue) {
  const args = message.content.replace("*p", "");
  const url = args.replace(/<(.+)>/g, 1);
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) {
    return message.channel.send(
      getEmbed("Tá Errado", "Você tem que estar em um canal de voz!")
    );
  }

  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#6c856f")
      .setTitle("Não tenho permissão para me juntar a esse canal!");

    return message.channel.send(embed);
  }
  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    const playlist = await youtube.getPlaylist(url)
    console.log(playlist)
    const videos = await playlist.getVideos()
    for (const video of Object.values(videos)) {
      const video2 = await youtube.getVideoByID(video.id)
      await handleVideo(video2, message, voiceChannel)
    }
  } else {
    try {
      //Aqui pega o texto e busca na API e pega o id do video
      // Here take the text and search the API and get the video id
      console.log(url);
      var video = await youtube.getVideo(url);
    } catch (error) {
      try {
        var videos = await youtube.searchVideos(url, 1);
        var video = await youtube.getVideoByID(videos[0].id);
      } catch (err) {
        const embed = new Discord.MessageEmbed()
          .setColor("#6c856f")
          .setTitle("Não posso buscar por isso!");

        return message.channel.send(embed);
      }
    }
    return handleVideo(video, message, voiceChannel)
  }

}

function skip(message, serverQueue) {
  //Function for skip music Função que pula a musica
  if (!message.member.voice.channel) {
    return message.channel.send(
      getEmbed("Estou em CDR", "Tem que estar em um canal de voz para pular!")
    );
  }
  if (!serverQueue) {
    return message.channel.send(
      getEmbed("Vai pular vento ?", "Não há nada para a pular!")
    );
  }
  serverQueue.connection.dispatcher.end();

  return message.channel.send(getEmbed("É o Pulas", "Música foi pulada"));
}

function clear(message, serverQueue) {
  //Função que limpa a lista de musicas
  if (!message.member.voice.channel) {
    return message.channel.send(
      getEmbed("Tá Errado", "Você tem que estar em um canal de voz!")
    );
  }
  if (!serverQueue) {
    return message.channel.send(
      getEmbed("TÁ TUDO LIMPO JÁ", "Não há nada a limpar!")
    );
  }
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();

  return message.channel.send(
    getEmbed("Limpandu", "Pano passado niguém vai ouvir música aqui")
  );
}
async function handleVideo(video, message, voiceChannel) {

  const serverQueue = queue.get(message.guild.id)
  const song = {
    id: video.id,
    title: video.title, ///Util.escapeMarkdown
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

    return message.channel.send(
      getEmbed(song.title + "\n🐺", "Foi Colocado na Fila:" + "\n" + song.url)
    );
  }
}

function play(guild, song) {
  //Function for play music Função que toca a musica

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
  serverQueue.textChannel.send(
    getEmbed(song.title + "\n🎧", "Vai tocar agora\n" + "\n" + song.url)
  );
}
