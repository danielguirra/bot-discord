const prefix = "*";
const ytdl = require("ytdl-core");
const queue = new Map();
const Youtube = require("simple-youtube-api");

const youtube = new Youtube(process.env.YOUTOKEN);

global.bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (
    message.content.startsWith(`${prefix}play`) ||
    message.content.startsWith(`${prefix}p`)
  ) {
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
});console.log('Passou');

async function execute(message, serverQueue) {
  const args = message.content.replace("*p", "")
  const url = args.replace(/<(.+)>/g, 1)

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send("Você tem que estar em um canal de voz");
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "Não tenho permissão para me juntar a esse canal"
    );
  }
  try {//Aqui pega o texto e busca na API e pega o id do video
    // Here take the text and search the API and get the video id
    console.log(url)
    var video = await youtube.getVideo(url);
  } catch (error) {
    try {
      var videos = await youtube.searchVideos(url, 1);
      var video = await youtube.getVideoByID(videos[0].id);
    } catch (err) {
      return message.channel.send("Não posso buscar por isso");
    }
  }

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
    const embed = new Discord.MessageEmbed()
      .setColor('#6c856f')
      .setTitle(song.title+'\n🐺')
      .setDescription('Foi Adicionado a fila:' + '\n' + song.url)
    return message.channel.send(embed)

  }
}

function skip(message, serverQueue) {//Function for skip music Função que pula a musica
  if (!message.member.voice.channel) {
    const embed = new Discord.MessageEmbed()
      .setColor('#6c856f')
      .setTitle('Tem que estar em um canal de voz para pular!')
    return message.channel.send(embed)
  }
  if (!serverQueue) {
    const embed = new Discord.MessageEmbed()
      .setColor('#6c856f')
      .setTitle('Não há nada para pular!')
    return message.channel.send(embed)
  }
  serverQueue.connection.dispatcher.end()
  const embed = new Discord.MessageEmbed()
    .setColor('#6c856f')
    .setTitle('Musica pulada :')
  return message.channel.send(embed)
}

function stop(message, serverQueue) {//Function for stop music Função que para a musica
  if (!message.member.voice.channel)
    return message.channel.send(
      "Você tem que estar em um canal de voz para parar a música!"
    );

  if (!serverQueue) return message.channel.send("Tem nada para pular");

  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {//Function for play music Função que toca a musica
  const embed = new Discord.MessageEmbed()
    .setColor('#6c856f')
    .setTitle(song.title +'\n🐺')
    .setDescription('Vai tocar agora\n' +  '\n' + song.url)
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
    serverQueue.textChannel.send(embed)
    //: embed }).then(embedMessage => {
    //   embedMessage.react("⏸");
    //   embedMessage.react("⏭")
    //   reaction();
    //   console.log('tesadasd')
    // });

}
// function reaction(){
//   global.bot.on("MessageReaction", async (reaction, user) => {
//     console.log('Passou');
//     if (reaction.message.partial) await reaction.message.fetch();
//       if (reaction.partial) await reaction.fetch();
//       if (user.bot) return;
//       if (!reaction.message.guild) return;
//     const channel='818242035101859851'
//     const serverQueue = queue.get(reaction.guild.id)
//     if (reaction.message.partial) await reaction.message.fetch();
//     if (reaction.partial) await reaction.fetch();
//     if (user.bot) return;
//     if (!reaction.message.guild) return;
  
//     if (reaction.message.channel.id === channel) {
//       if (reaction.emoji.name === "⏸") {
//         await reaction.message.guild.members.cache.get(stop(`${prefix}stop`,serverQueue));
//       }
//       if (reaction.emoji.name === "⏭") {
//         await reaction.message.guild.members.cache.get(skip(`${prefix}skip`,serverQueue));
//       }
//     } else {
//       return;
//     }
//   })
// }
