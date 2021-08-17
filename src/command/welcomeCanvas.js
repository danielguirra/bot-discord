const Canvas = require('canvas')
const Discord = require("discord.js");
const { registerFont } = require('canvas')
registerFont('./fonts/comic.ttf', { family: 'Comic' })
async function canvas(member) {

    const applyText = (canvas, text) => {
        const context = canvas.getContext('2d');
        let fontSize = 70;

        do {
            context.font = `${fontSize -= 10}px comic`;
        } while (context.measureText(text).width > canvas.width - 300);

        return context.font;
    };
    const canvas = Canvas.createCanvas(700, 250)
    const context = canvas.getContext("2d")

    const background = await Canvas.loadImage('./images/wallpaper.png')

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#74037b';
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ffffff';
    context.strokeStyle = '#000000'

    context.font = '28px comic';

    context.fillText('Seja bem Vindo,', canvas.width / 1.5, canvas.height / 1.5);
    context.strokeText('Seja bem Vindo,', canvas.width / 1.5, canvas.height / 1.5);

    context.font = applyText(canvas, `${member.displayName}!`);

    context.fillText(`${member.displayName}!`, canvas.width / 2.25, canvas.height / 1.1);
    context.strokeText(`${member.displayName}!`, canvas.width / 2.25, canvas.height / 1.1);



    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));


    context.drawImage(avatar, 560, 12, 130, 130);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png')
    return (attachment)
}


module.exports = { canvas }