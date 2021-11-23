const { SlashCommandBuilder } = require("@discordjs/builders");
const Canvas = require("canvas");
const { MessageAttachment, MessageEmbed } = require("discord.js");
const { registerFont } = require("canvas");
registerFont("./fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("temperatura")
    .setDescription("Obtenha o clima da cidade digitada.")
    .addStringOption((option) =>
      option.setName("cidade").setDescription("A cidade")
    ),
  async execute(interaction) {
    const text = interaction.options.getString("cidade");

    let url = `https://wttr.in/${text}%20brasil.png`;
    if (text === "ribeirao") {
      url = "https://wttr.in/ribeir%C3%A3o%20preto%20brasil.png";
    }
    const canvas = Canvas.createCanvas(500, 170);
    const context = canvas.getContext("2d");
    const background = await Canvas.loadImage(url);
    context.drawImage(background, 3, 136, 250, 85, 0, 0, 250, 85);
    context.drawImage(background, 254, 136, 250, 85, 250, 0, 250, 85);
    context.drawImage(background, 499, 136, 250, 85, 0, 85, 250, 85);
    context.drawImage(background, 750, 136, 250, 85, 250, 85, 250, 85);

    const attachment = new MessageAttachment(canvas.toBuffer(), "clima.png");

    let manha = new MessageEmbed()
      .setTitle("Clima")
      .setDescription(`Clima de hoje de ${text}`);

    interaction.reply({ embeds: [manha], files: [attachment] });
  },
};
