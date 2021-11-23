const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("grande")
    .setDescription("grandedia")
    .addUserOption((option) =>
      option.setName("target").setDescription("o cidadão")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    async function canvas() {
      const canvas = Canvas.createCanvas(1186, 590);
      const context = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://i.im.ge/2021/09/24/TYiYOy.png"
      );
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      const avatar = await Canvas.loadImage(
        user.displayAvatarURL({ format: "png" })
      );
      context.drawImage(avatar, 60, 160, 210, 210);
      console.log(user.tag);
      context.font = "38px comic";
      context.fillText(`${user.tag}`, 280, 248);
      context.strokeText(`${user.tag}`, 280, 248);
      context.font = "28px comic";
      context.fillStyle = "#808080";
      context.strokeStyle = "#808080";
      context.fillText(`@${user.tag}oficial`, 280, 298);
      context.strokeText(`@${user.tag}oficial`, 280, 298);
      const attachment = new MessageAttachment(canvas.toBuffer(), "day.png");
      interaction.reply({ files: [attachment] });
    }
    canvas();
  },
};
