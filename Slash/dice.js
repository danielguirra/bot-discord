const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sorteio")
    .setDescription("sorteia o valor digitado")
    .addIntegerOption((option) =>
      option.setName("int").setDescription("valor a ser sorteado")
    ),
  async execute(interaction) {
    const num = interaction.options.getInteger("int");
    if (num >= 2) {
      let dado = Math.floor(Math.random() * num);
      dado + 1;
      interaction.reply({
        embeds: [
          getEmbed(
            `SORTEANDOOO`,
            `${interaction.user.tag} vc escolheu o valor **${num}**
            ------------------------------
            seu número é :🎲 **${dado}**  🎲`
          ),
        ],
      });
    } else
      interaction.reply({
        embeds: [getEmbed(`Erro`, `Digite um valor maior ou igual a 2`)],
      });
  },
};
