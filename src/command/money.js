module.exports = {
  name: "burgues",
  aliases: "m",
  async execute(message) {
    let user = message.mentions.users.first();
    if (!user) {
      user = message.guild.member(message.author);
    }
    const member = message.guild.member(user);
    message.delete();
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");

    const canvas = Canvas.createCanvas(768, 480);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://ehacks.com.br/wp-content/uploads/167/17-shut-up-and-take-my-money-e1518817154986.jpg"
    );

    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "png" })
    );
    context.drawImage(avatar, 260, 170, 180, 180);

    const attachment = new MessageAttachment(canvas.toBuffer(), "burgues.png");

    message.channel.send(attachment);
  },
};
