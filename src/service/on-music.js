
const getEmbed = require('../command/getEmbed')

const Distube = require('distube')


const prefix = '*'

const distube = new Distube(global.bot, { searchSongs: true, emitNewSongOnly: true })


global.bot.on("message", async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift();
    if (command == "play")
        distube.play(message, args.join(" "));

    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "stop") {
        distube.stop(message);
        message.channel.send(getEmbed.getEmbed("Musica parada", `quem pediu ${message.author}`));
    }

    if (command == "skip") {
        distube.skip(message);
        message.channel.send(getEmbed.getEmbed("Musica pulada", `quem pediu ${message.author}`));
    }
    if (command === 'queue') {
        const queue = distube.getQueue(message)
        if (!queue) {
            message.channel.send('Nothing playing right now!')
        } else {
            message.channel.send(
                `Current queue:\n${queue.songs
                    .map(
                        (song, id) =>
                            `**${id ? id : 'Playing'}**. ${song.name} - \`${song.formattedDuration
                            }\``,
                    )
                    .slice(0, 10)
                    .join('\n')}`,
            )
        }
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send(getEmbed.getEmbed('O filtro:', (filter || "Off")));
    }

    const status = (queue) => `Volume: \`${queue.volume}%\` | Filtro: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

    distube
        .on("playSong", (queue, song) => status(queue))

        .on("addSong", (message, queue, song) => message.channel.send(getEmbed.getEmbed(
            `Adicionado ${song.name} ${song.formattedDuration}`, `\npedido por: ${song.user}`)
        ))
        .on("playList", (message, queue, playlist, song) => message.channel.send(getEmbed.getEmbed(
            `${playlist.name}(${playlist.songs.length} musicas). `, `\npedido por: ${song.user}\nVai tocar ${song.name} ${song.formattedDuration}\n${status(queue)}`)
        ))
        .on("addList", (message, queue, playlist) => message.channel.send(getEmbed.getEmbed(
            `Adicionado ${playlist.name} playlist (${playlist.songs.length} musicas)`, ` \npara fila\n${status(queue)}`)
        ))
        .on("searchResult", (message, result) => {
            let i = 0;
            message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
        })
        .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
        .on("error", (message, e) => {
            console.error(e)
            message.channel.send("An error encountered: " + e);
        });
})
