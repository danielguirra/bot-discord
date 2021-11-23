const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pdl")
    .setDescription("pdl")
    .addUserOption((option) =>
      option.setName("target").setDescription("o cidadão")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    async function canvas() {
      const canvas = Canvas.createCanvas(720, 681);
      const context = canvas.getContext("2d");
      const background = await Canvas.loadImage("./Slash/util/image/pdl.jpg");
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      let avatar;
      try {
        avatar = await Canvas.loadImage(
          user.displayAvatarURL({ format: "png" })
        );
      } catch (error) {
        return interaction.reply("Está errado falto marcar alguém");
      }
      context.drawImage(avatar, 240, 70, 230, 230);
      const attachment = new MessageAttachment(canvas.toBuffer(), "fine.png");
      try {
        interaction.reply({ files: [attachment] });
      } catch (error) {
        return;
      }
    }
    canvas();
  },
};
