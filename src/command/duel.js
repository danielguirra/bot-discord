

module.exports = {
    name: 'duel',
    async execute(message) {
        let user = message.mentions.users.first();
        let user2 = message.guild.member(message.author)
        const member = message.guild.member(user)
        const member2 = message.guild.member(user2)
        const Canvas = require('canvas')
        const Discord = require("discord.js");
        const { registerFont } = require('canvas')
        registerFont('./fonts/comic.ttf', { family: 'Comic' })

        const canvas = Canvas.createCanvas(1980, 760)
        const context = canvas.getContext("2d")
        
        const background2 = await Canvas.loadImage('https://pm1.narvii.com/6808/76e9544607fa5b0e1bcb505bd193dbe1d654643dv2_hq.jpg')
        context.drawImage(background2, 0, 0,1000, 1000);
        const background = await Canvas.loadImage('https://i.im.ge/2021/08/28/QlLSR1.png')
        context.drawImage(background, 1000, 0, 1000, 760);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar, 260, 200, 250, 250);
        const avatar2 = await Canvas.loadImage(member2.user.displayAvatarURL({ format: 'png' }));
        context.drawImage(avatar2, 1460, 200, 250, 250);
        context.fillStyle = '#000';
        context.strokeStyle = '#f00'

        context.font = '80px comic';

        context.fillText('É Hora do D-D-D-Duelooo!', 500, 600);
        context.strokeText('É Hora do D-D-D-Duelooo!', 500, 600);


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'duel.png')

        message.channel.send(attachment)
    }

}