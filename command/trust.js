module.exports = {
  name: "confia",
  aliases: "c",
  async execute(message) {
    let user = message.mentions.users.first();
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");

    const canvas = Canvas.createCanvas(302, 167);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/08/13/wuwi4.jpg"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 60, 30, 150, 90);

    const attachment = new MessageAttachment(canvas.toBuffer(), "confia.png");

    message.channel.send({ files: [attachment] });
  },
};
