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
    if (interaction.type === "APPLICATION_COMMAND") {
      const string = interaction.options.getString("input");
      let url = `https://g.tenor.com/v1/search?q=${string}&key=${tenor}&ContentFilter=G`;
      let response = await axios.get(url);
      let json = await response["data"];
      const random = Math.floor(Math.random() * json.results.length);

      interaction.reply(json.results[random].url);
    } else {
      let tokens = interaction.content.split(" "); //Gif
      if (tokens[0] === "*gif") {
        let searchGif = "Capivara";

        if (tokens.length > 1) {
          searchGif = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${searchGif}&key=${process.env.TENORKEY}&ContentFilter=G`;
        let response = await axios.get(url);
        let json = response["data"];
        const random = Math.floor(Math.random() * json.results.length);

        interaction.reply(json.results[random].url);
      }
    }
  },
};
