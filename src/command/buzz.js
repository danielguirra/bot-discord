

module.exports = {
    name: 'buzz',
    aliases: 'b',
    async execute(message, args) {
        if (message.content.startsWith('*b')) {
            const user = message.mentions.users.first();
            if (user) {
                message.delete();
                const member = message.guild.member(message.author)
                const member2 = message.guild.member(user)
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
                    const canvas = Canvas.createCanvas(500, 750)
                    const context = canvas.getContext("2d")
                    const background = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
                    const background2 = await Canvas.loadImage(member2.user.displayAvatarURL({ format: 'png' }));
                    context.drawImage(background, 250, 0, 250, 250);
                    context.drawImage(background2, 0, 0, 250, 250);
                    context.fillStyle = '#ffffff';
                    context.strokeStyle = '#000000'

                    context.font = '24px comic';

                    context.fillText('Man tu é guei, cara?', 260, 200);
                    context.strokeText('Man tu é guei, cara?', 260, 200);


                    const buzz = await Canvas.loadImage('https://i.im.ge/2021/08/04/U9iPL.jpg');


                    context.drawImage(buzz, 0, 250, 500, 500);
                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'guei.png')

                    message.channel.send(attachment)
                }
                canvas()
            }
        }

    }
}