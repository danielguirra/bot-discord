const { SlashCommandBuilder } = require("@discordjs/builders");
const { dayNews } = require("../service/dayNews");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dia")
    .setDescription("envia tudo do dia"),
  async execute(interaction) {
    let guildID = await interaction.client.guilds.fetch(process.env.GUILD);
    let channeldia = await guildID.channels.fetch(process.env.DIA);
    let channellove = await guildID.channels.fetch(process.env.LOVE);
    let channeldolar = await guildID.channels.fetch(process.env.DOLAR);
    let channelClimate = await guildID.channels.fetch(process.env.CLIMA);
    try {
      dayNews(channellove, channeldia, channeldolar, channelClimate);
      return interaction.reply("Pronto");
    } catch (error) {
      return interaction.reply("Erro");
    }
  },
};
