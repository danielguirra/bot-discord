const getEmbed = require('./getEmbed')

module.exports = {
    name: 'aviso',
    aliases: 'a',
    discription: 'Notice send channel',
    execute(message, args) {
        args = message.content.replace("*aviso", "").trim()
        let avatar = message.author.displayAvatarURL()
        let member = message.guild.member(message.author)
        let nickname = member.displayName
        message.delete();
        message.channel.send("@everyone");
        message.channel.send(getEmbed.getEmbed("Importante", `@everyone ${args}`, avatar, nickname));

    }
}