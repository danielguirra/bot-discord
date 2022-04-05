// const Canvas = require("canvas");
// const { MessageAttachment } = require("discord.js");

// module.exports = {
//   name: "duelo",
//   async execute(message) {
//     const user = message.mentions.users.first();

//     const canvas = Canvas.createCanvas(1980, 760);
//     const context = canvas.getContext("2d");

//     const background = await Canvas.loadImage("./Slash/util/image/duelo.png");
//     context.drawImage(background, 0, 0, canvas.width, canvas.height);
//     const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
//     context.drawImage(avatar, 260, 200, 250, 250);
//     const avatar2 = await Canvas.loadImage(
//       message.author.displayAvatarURL({ format: "png" })
//     );
//     context.drawImage(avatar2, 1460, 200, 250, 250);
//     const attachment = new MessageAttachment(canvas.toBuffer(), "duel.png");
//     try {
//       message.reply({ files: [attachment] });
//     } catch (err) {
//       return;
//     }
//   },
// };
