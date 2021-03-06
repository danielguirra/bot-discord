const { SlashCommandBuilder } = require("@discordjs/builders");
const { registerFont } = require("canvas");
registerFont("./fonts/comic.ttf", { family: "Comic" });

const { sendClimateCurrentTime } = require("../service/sendclimate");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clima")
    .setDescription("Obtenha o clima da cidade digitada.")
    .addStringOption((option) =>
      option.setName("cidade").setDescription("A cidade")
    ),
  async execute(interaction) {
    let city;
    if (interaction.type === "DEFAULT") {
      city = interaction.content.replace("*clima ", "");
    } else {
      city = interaction.options.getString("cidade");
    }
    return sendClimateCurrentTime(interaction.channel, city).then((f) => {
      if (f)
        try {
          interaction.reply(f);
        } catch (error) {
          interaction.send(f);
        }
    });
  },
};
