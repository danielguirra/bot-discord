
module.exports = {
    name: 'you',
    alises: 'y',
    async execute(message) {
        const user = message.mentions.users.first();
        const member = message.guild.member(user)
        message.delete();
        const Canvas = require('canvas')
        const Discord = require("discord.js");
        const { registerFont } = require('canvas')
        registerFont('./fonts/comic.ttf', { family: 'Comic' })

        const canvas = Canvas.createCanvas(400, 400)
        const context = canvas.getContext("2d")
        const background = await Canvas.loadImage('https://pbs.twimg.com/profile_images/1257129471007694849/jZd6covt_400x400.jpg')
        context.drawImage(background, -150, 0, 700, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar, 150, 40, 200, 200);
        context.fillStyle = '#ffffff';
        context.strokeStyle = '#000000'

        context.font = '35px comic';

        context.fillText('You cracudo man?', 80, 320);
        context.strokeText('You cracudo man?', 80, 320);


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'confia.png')

        message.channel.send(attachment)
    }

}