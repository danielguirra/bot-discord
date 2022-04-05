const { SlashCommandBuilder } = require("@discordjs/builders");
const { default: axios } = require("axios");
const tenor = process.env.TENORKEY;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Procurar no tenor por gifs")
    .addStringOption((option) =>
      option.setName("input").setDescription("Digite algo")
    ),
  async execute(interaction) {
    let string;
    if (interaction.type === "DEFAULT") {
      string = interaction.content.replace("*gif ", "");
    } else {
      string = interaction.options.getString("input");
    }
    if (string === "") {
      string = "capivara";
    }
    let url = `https://g.tenor.com/v1/search?q=${string}&key=${tenor}&ContentFilter=G`;
    let response = (await axios.get(url)).data;
    const random = Math.floor(Math.random() * response.results.length);

    interaction.reply(response.results[random].url);
  },
};
