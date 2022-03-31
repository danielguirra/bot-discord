const { SlashCommandBuilder } = require("@discordjs/builders");
const { default: axios } = require("axios");
const tenor = process.env.TENORKEY
module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Procurar no tenor por gifs")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    ),
  async execute(interaction) {
    const string = interaction.options.getString("input");
    let url = `https://g.tenor.com/v1/search?q=${string}&key=${tenor}&ContentFilter=G`;
    let response = await axios.get(url);
    let json = await response["data"];
    const random = Math.floor(Math.random() * json.results.length);

    interaction.reply(json.results[random].url);
  },
};
