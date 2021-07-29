const Discord = require('discord.js')

const getEmbed = (title, description, authorAvatarURL, nickname) => {
    if (!authorAvatarURL) {
        authorAvatarURL = 'https://cdn.discordapp.com/avatars/811255307673010246/e62838ac7e74bd5879f19ad254b457e7.png?size=2048'
    }
    if (!nickname) {
        nickname = 'Capivara do TI'
    }
    let embed = new Discord.MessageEmbed()
        .setColor("#e69e19")
        .setTitle(title)
        .setDescription(description)
        .setFooter(nickname, authorAvatarURL)
    return embed;
}

module.exports = { getEmbed }