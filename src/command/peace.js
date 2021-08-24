

module.exports = {
    name: 'paz',
    async execute(message) {
        if (message.content.startsWith('*paz')) {
            let user = message.mentions.users.first();
            if (!user) {
                user = message.guild.member(message.author)
            }
            if (user) {
                const member = message.guild.member(user)
                const Canvas = require('canvas')
                const Discord = require("discord.js");
                const { registerFont, createCanvas } = require('canvas')
                registerFont('./fonts/comic.ttf', { family: 'Comic' })
                async function canvas() {

                    const canvas = Canvas.createCanvas(1000, 600)
                    const context = canvas.getContext("2d")
                    const background = await Canvas.loadImage('https://i.im.ge/2021/08/13/m4KMJ.png')

                    context.drawImage(background, 0, 0, canvas.width, canvas.height);

                    context.strokeStyle = '#74037b';
                    context.strokeRect(0, 0, canvas.width, canvas.height);

                    context.fillStyle = '#ffffff';
                    context.strokeStyle = '#000000'

                    context.font = '200px comic';

                    context.fillText('Mó paz', canvas.width / 4.2, canvas.height / 2);

                    context.strokeText('Mó paz', canvas.width / 4.2, canvas.height / 2);

                    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
                    context.drawImage(avatar, 690, 320, 230, 230);

                    const mcpoze = await Canvas.loadImage('https://i.im.ge/2021/08/24/4GpXF.png')
                    context.drawImage(mcpoze, 50, 270, 184, 256)

                    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'paz-image.png')

                    message.channel.send(attachment)
                }
                canvas()
            }
        }
    }
}