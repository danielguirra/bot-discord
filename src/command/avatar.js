module.exports = {
    name: 'avatar',
    description: 'return avatar URL',
    execute(message, args) {
        if (args = 'avatar') {
            const user = message.mentions.users.first();
            if (user) {
                message.delete();
                const member = message.guild.member(message.author)
                message.channel.send(`Coisa linda`)
                message.reply(member.user.displayAvatarURL())
            }
        }
    }
}