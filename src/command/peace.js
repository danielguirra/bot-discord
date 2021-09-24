

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
                const { MessageAttachment } = require("discord.js");
                async function canvas() {

                    const canvas = Canvas.createCanvas(1000, 600)
                    const context = canvas.getContext("2d")
                    const background = await Canvas.loadImage('https://i.im.ge/2021/09/24/T3b3qM.png')

                    context.drawImage(background, 0, 0, canvas.width, canvas.height);

                    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
                    context.drawImage(avatar, 690, 320, 230, 230);


                    const attachment = new MessageAttachment(canvas.toBuffer(), 'paz-image.png')

                    message.channel.send(attachment)
                }
                canvas()
            }
        }
    }
}