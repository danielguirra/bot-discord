module.exports = {
  name: "tiltado",
  aliases: "t",
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user) {
      user = message.guild.member(message.author);
    }
    if (user) {
      message.delete();
      const member = message.guild.member(user);
      const Canvas = require("canvas");
      const { MessageAttachment } = require("discord.js");
      const canvas = Canvas.createCanvas(344, 297);
      const context = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://i.im.ge/2021/09/24/T3c8Hy.png"
      );

      context.drawImage(background, 0, 0, canvas.width, canvas.height);

      const avatar = await Canvas.loadImage(
        member.user.displayAvatarURL({ format: "png" })
      );
      context.drawImage(avatar, 150, 55, 150, 150);

      const attachment = new MessageAttachment(
        canvas.toBuffer(),
        "tiltado.png"
      );

      message.channel.send(attachment);
    }
  },
};
