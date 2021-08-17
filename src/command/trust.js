
module.exports = {
    name: 'confia',
    alises: 'c',
    async execute(message) {
        const user = message.mentions.users.first();
        const member = message.guild.member(user)
        message.delete();
        const Canvas = require('canvas')
        const Discord = require("discord.js");

        const canvas = Canvas.createCanvas(302, 167)
        const context = canvas.getContext("2d")
        const background = await Canvas.loadImage('https://i.im.ge/2021/08/13/wuwi4.jpg')
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar, 60, 30, 150, 90);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'confia.png')

        message.channel.send(attachment)
    }

}