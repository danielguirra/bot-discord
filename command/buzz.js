// const { MessageAttachment } = require("discord.js");
// const Canvas = require("canvas");

// module.exports = {
//   name: "b",
//   aliases: "b",
//   async execute(message) {
//     async function canvas() {
//       const canvas = Canvas.createCanvas(500, 250);
//       const context = canvas.getContext("2d");

//       const buzz = await Canvas.loadImage("./Slash/util/image/buzz.png");
//       context.drawImage(buzz, 250, 0, 250, 255);
//       const guei = await Canvas.loadImage("./Slash/util/image/arco.png");
//       context.drawImage(guei, 0, 0, 250, 250);
//       const avatar1 = await Canvas.loadImage(
//         message.mentions.users.first().avatarURL({ format: "png" })
//       );
//       context.drawImage(avatar1, 90, 130, 66, 66);
//       const avatar2 = await Canvas.loadImage(
//         message.author.avatarURL({ format: "png" })
//       );

//       context.drawImage(avatar2, 400, 18, 66, 66);

//       const attachment = new MessageAttachment(canvas.toBuffer(), "guei.png");

//       try {
//         message.channel.send(`${message.mentions.users.first()} `);
//         message.reply({ files: [attachment] });
//       } catch (error) {
//         console.log(error);
//         message.reply({ content: "Falto marcar alguém" });
//       }
//     }
//     canvas();
//   },
// };
