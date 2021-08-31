


module.exports = {
    name: 'x1',
    async execute(message) {
        let user = message.mentions.users.first();
        if (!user) {
            user = message.guild.member(message.author)
        }
        const member = message.guild.member(user)
        message.delete();
        const Canvas = require('canvas')
        const Discord = require("discord.js");
        const { registerFont } = require('canvas')
        registerFont('./fonts/comic.ttf', { family: 'Comic' })


        const canvas = Canvas.createCanvas(429, 429)
        const context = canvas.getContext("2d")
        const background = await Canvas.loadImage('https://pbs.twimg.com/media/DCfsJ6QXkAAqgF9.jpg')
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar, 170, 50, 150, 150);
        context.fillStyle = '#f00';
        context.font = '30px comic';

        context.fillText('X1, SEU LIXO!', 100, 350);
        context.strokeText('X1, SEU LIXO!', 100, 350);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'confia.png')

        message.channel.send(attachment)
    }

}