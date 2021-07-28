const getEmbed = require('./getEmbed')

module.exports = {
    name: 'aviso',
    discription: 'Notice send channel',
    execute(message, args) {
        let avatar = message.author.displayAvatarURL()
        let member = message.guild.member(message.author)
        let nickname = member.displayName
        message.delete();
        message.channel.send("@everyone");
        message.channel.send(getEmbed.getEmbed("Importante", `@everyone ${args}`, avatar, nickname));

    }
}