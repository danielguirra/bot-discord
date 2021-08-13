
module.exports = {
    name: 'ovo',
    async execute(message, args) {
        const text = message.content.replace("*ovo", "")
        const Canvas = require('canvas')
        const Discord = require("discord.js");
        const { registerFont } = require('canvas')
        registerFont('./fonts/comic.ttf', { family: 'Comic' })

        const canvas = Canvas.createCanvas(240, 160)
        const context = canvas.getContext("2d")
        const background = await Canvas.loadImage('https://i.kym-cdn.com/photos/images/newsfeed/001/902/944/1e5.jpg')

        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.fillStyle = '#ffffff';

        context.font = '13px comic';

        context.fillText(`Ovo${text}`, 40, 130);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ovo.png')

        message.channel.send(attachment)
    }

}



