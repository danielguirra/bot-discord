module.exports = {
  name: "fine",
  description: `Make new it's fine meme your avatar of discord`,
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user) {
      user = message.guild.member(message.author);
    }
    const member = message.guild.member(user);
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");
    const canvas = Canvas.createCanvas(640, 306);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/TxnjQh.jpg"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "png" })
    );
    context.drawImage(avatar, 240, 70, 90, 90);
    const attachment = new MessageAttachment(canvas.toBuffer(), "fine.png");
    message.channel.send(attachment);
  },
};
