const { SlashCommandBuilder } = require("@discordjs/builders");
const { registerFont } = require("canvas");
registerFont("./fonts/comic.ttf", { family: "Comic" });

const { sendClimate } = require("../service/sendclimate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("climadodia")
    .setDescription("Obtenha o clima do dia por horários da cidade digitada.")
    .addStringOption((option) =>
      option.setName("cidade").setDescription("A cidade")
    ),
  async execute(interaction) {
    let city;
    if (interaction.type === "DEFAULT") {
      city = interaction.content.replace("*climadodia ", "");
    } else {
      city = interaction.options.getString("cidade");
    }
    return sendClimate(interaction.channel, city).then((f) => {
      if (f)
        try {
          interaction.reply(f);
        } catch (error) {
          interaction.send(f);
        }
    });
  },
};
