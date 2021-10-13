module.exports = {
  name: "you",
  aliases: "y",
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user) {
      user = message.guild.member(message.author);
    }
    const member = message.guild.member(user);
    //message.delete();
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");
    const canvas = Canvas.createCanvas(400, 400);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/T3cfXF.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "png" })
    );
    context.drawImage(avatar, 100, 40, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), "you.png");

    message.channel.send(attachment);
  },
};
