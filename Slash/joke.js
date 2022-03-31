const { SlashCommandBuilder } = require("@discordjs/builders");
const { default: axios } = require("axios");
const cheerio = require("cheerio");
const { getEmbed } = require("../util/getEmbed");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("envia uma piada aletória"),
  async execute(interaction) {
    let logo =
      "https://www.piadasnet.com/imagens/Logotipos/LogotipoBoneco_peq.png";
    let url = "https://www.piadasnet.com/piadas-curtas.htm";
    const response = await axios.request({
      method: "GET",
      url: "https://www.piadasnet.com/piadas-curtas.htm",
      responseType: "arraybuffer",
      responseEncoding: "binary",
    });
    getEmbed;
    const $ = cheerio.load(response.data.toString("binary"));
    const text = $("p[class=piada]").text();
    interaction.channel.send({
      embeds: [
        getEmbed(
          "Piada-curtas",
          text,
          logo,
          "PiadasNet",
          logo,
          "",
          "#ffff34",
          url
        ),
      ],
    });
  },
};
