const Discord = require('discord.js')

const getEmbed = (title, description) => {
    let embed = new Discord.MessageEmbed()
        .setColor("#6c856f")
        .setTitle(title)
        .setDescription(description);
    return embed;
}

module.exports = { getEmbed }