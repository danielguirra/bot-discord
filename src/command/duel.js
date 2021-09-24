

module.exports = {
    name: 'duel',
    async execute(message) {
        let user = message.mentions.users.first();
        let user2 = message.guild.member(message.author)
        const member = message.guild.member(user)
        const member2 = message.guild.member(user2)
        const Canvas = require('canvas')
        const { MessageAttachment } = require("discord.js");

        const canvas = Canvas.createCanvas(1980, 760)
        const context = canvas.getContext("2d")

        const background = await Canvas.loadImage('https://i.im.ge/2021/09/24/T35cbc.png')
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar, 260, 200, 250, 250);
        const avatar2 = await Canvas.loadImage(member2.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar2, 1460, 200, 250, 250);
        const attachment = new MessageAttachment(canvas.toBuffer(), 'duel.png')

        message.channel.send(attachment)
    }

}