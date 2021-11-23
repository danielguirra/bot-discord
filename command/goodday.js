module.exports = {
  name: "day",
  aliases: "good",
  async execute(message) {
    let user = message.mentions.users.first();
    const Canvas = require("canvas");
    const { MessageAttachment } = require("discord.js");
    const { registerFont } = require("canvas");
    registerFont("./fonts/comic.ttf", { family: "Comic" });
    const canvas = Canvas.createCanvas(1186, 590);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(
      "https://i.im.ge/2021/09/24/TYiYOy.png"
    );
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(user.avatarURL({ format: "png" }));
    context.drawImage(avatar, 60, 160, 210, 210);

    context.font = "38px comic";
    context.fillText(`${user.tag}`, 280, 248);
    context.strokeText(`${user.tag}`, 280, 248);
    context.font = "28px comic";
    context.fillStyle = "#808080";
    context.strokeStyle = "#808080";
    context.fillText(
      `@${user.tag.replace(" ", "").replace(" ", "").toLowerCase()}oficial`,
      280,
      298
    );
    context.strokeText(
      `@${user.tag.replace(" ", "").replace(" ", "").toLowerCase()}oficial`,
      280,
      298
    );
    const attachment = new MessageAttachment(canvas.toBuffer(), "day.png");
    message.channel.send({ files: [attachment] });
  },
};
