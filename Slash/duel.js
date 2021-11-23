const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("duel")
    .setDescription("é hora do duelo")
    .addUserOption((option) =>
      option.setName("target").setDescription("o bocó")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");

    const canvas = Canvas.createCanvas(1980, 760);
    const context = canvas.getContext("2d");

    const background = await Canvas.loadImage("./Slash/util/image/duelo.png");
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(
      user.displayAvatarURL({ format: "png" })
    );
    context.drawImage(avatar, 260, 200, 250, 250);
    const avatar2 = await Canvas.loadImage(
      interaction.user.displayAvatarURL({ format: "png" })
    );
    context.drawImage(avatar2, 1460, 200, 250, 250);
    const attachment = new MessageAttachment(canvas.toBuffer(), "duel.png");
    try {
      interaction.reply({ files: [attachment] });
    } catch (err) {
      return;
    }
  },
};
