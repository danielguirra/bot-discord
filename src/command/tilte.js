

module.exports = {
    name: 'tiltado',
    async execute(message, args) {
        if (message.content.startsWith('*tiltado')) {
            const user = message.mentions.users.first();
            if (user) {
                message.delete();
                const member = message.guild.member(user)
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
                    const canvas = Canvas.createCanvas(344, 297)
                    const context = canvas.getContext("2d")
                    const background = await Canvas.loadImage('https://i.im.ge/2021/08/13/m4fxS.jpg')

                    context.drawImage(background, 0, 0, canvas.width, canvas.height);
                    context.fillStyle = '#ffffff';
                    context.strokeStyle = '#000000'

                    context.font = '20px comic';

                    context.fillText('Eu to tiltado, cara?', 100, 250);
                    context.strokeText('Eu to tiltado, cara?', 100, 250);


                    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));


                    context.drawImage(avatar, 150, 55, 150, 150);
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'tiltado.png')

                    message.channel.send(attachment)
                }
                canvas()
            }
        }

    }
}