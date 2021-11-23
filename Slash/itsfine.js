const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tranquilo")
    .setDescription("itsfine")
    .addUserOption((option) =>
      option.setName("target").setDescription("o cidadão")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    async function canvas() {
      const canvas = Canvas.createCanvas(640, 306);
      const context = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://i.im.ge/2021/09/24/TxnjQh.jpg"
      );
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      const avatar = await Canvas.loadImage(
        user.displayAvatarURL({ format: "png" })
      );
      context.drawImage(avatar, 240, 70, 90, 90);
      const attachment = new MessageAttachment(canvas.toBuffer(), "fine.png");
      interaction.reply({ files: [attachment] });
    }
    canvas();
  },
};
