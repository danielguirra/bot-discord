const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require("canvas");
registerFont("./Slash/fonts/comic.ttf", { family: "Comic" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ovo")
    .setDescription("ovo texto")
    .addStringOption((option) =>
      option.setName("string").setDescription("texto ovo")
    ),
  async execute(interaction) {
    const text = interaction.options.getString("string");
    async function canvas() {
      const canvas = Canvas.createCanvas(240, 160);
      const context = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://i.kym-cdn.com/photos/images/newsfeed/001/902/944/1e5.jpg"
      );

      context.drawImage(background, 0, 0, canvas.width, canvas.height);
      context.fillStyle = "#ffffff";

      context.font = "13px comic";

      context.fillText(`Ovo ${text}`, 40, 130);

      const attachment = new MessageAttachment(canvas.toBuffer(), "ovo.png");

      try {
        interaction.channel.send(`<@${interaction.user.id}>  `);
        interaction.reply({ files: [attachment] });
      } catch (error) {
        interaction.reply({ content: "Falto marcar alguém" });
      }
    }
    canvas();
  },
};
