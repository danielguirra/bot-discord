

module.exports = {
    name: 'paz',
    async execute(message, args) {
        const member = message.guild.member(message.author)
        const Canvas = require('canvas')
        const Discord = require("discord.js");
        const { registerFont, createCanvas } = require('canvas')
        registerFont('./fonts/comic.ttf', { family: 'Comic' })
        async function canvas() {

            const applyText = (canvas, text) => {
                const context = canvas.getContext('2d');
                let fontSize = 70;

                do {
                    context.font = `${fontSize -= 10}px comic`;
                } while (context.measureText(text).width > canvas.width - 300);

                return context.font;
            };
            const canvas = Canvas.createCanvas(1000, 600)
            const context = canvas.getContext("2d")
            const background = await Canvas.loadImage('./images/gambull.png')

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            context.strokeStyle = '#74037b';
            context.strokeRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#ffffff';
            context.strokeStyle = '#000000'

            context.font = '200px comic';

            context.fillText('Mó paz', canvas.width / 4.2, canvas.height / 2);
            context.strokeText('Mó paz', canvas.width / 4.2, canvas.height / 2);

            context.font = applyText(canvas);


            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));


            context.drawImage(avatar, 690, 290, 250, 250);
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'paz-image.png')

            message.channel.send(attachment)
        }
        canvas()
    }
}