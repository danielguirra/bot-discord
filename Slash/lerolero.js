const { getEmbed } = require("../util/getEmbed");
const lero = require("lerolero");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lerolero")
    .setDescription("Conselho aletório"),
  async execute(interaction) {
    interaction.reply({
      embeds: [
        getEmbed(
          "Lero Lero",
          lero(),
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK_-Az0lr-qqNiYwQQmqVd4_suO63-BTKFZyL8IqZRjweIJuaPgerkP3FrWssLVZpNPs&usqp=CAU",
          "Ovelha",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK_-Az0lr-qqNiYwQQmqVd4_suO63-BTKFZyL8IqZRjweIJuaPgerkP3FrWssLVZpNPs&usqp=CAU",
          "",
          "#ffffff"
        ),
      ],
    });
  },
};
