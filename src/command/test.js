

module.exports = {
    name: 'teste',
    async execute(message, args) {
        const canvas = require
            ('./canvas')

        const member = message.guild.member(message.author)

        message.channel.send(await canvas.canvas(member))
    }
}