const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("util").promisify(setTimeout);
module.exports = {
  data: new SlashCommandBuilder()
    .setName("cls")
    .setDescription("apaga mensagem de ate 15 dias")
    .addIntegerOption((option) =>
      option.setName("int").setDescription("valor a ser deletado")
    ),
  async execute(interaction) {
    let num;
    if (interaction.type === "DEFAULT") {
      num = interaction.content.replace("*cls ", "");
      interaction.channel.bulkDelete(num);
      interaction.reply(`Foi apagado ${num}`);
      await wait(1000);
      interaction.channel.bulkDelete(num);
    } else {
      num = interaction.options.getInteger("int");
      interaction.channel.bulkDelete(num);
      interaction.reply(`Foi apagado ${num}`);
      await wait(1000);
      interaction.channel.bulkDelete(num);
    }
  },
};
