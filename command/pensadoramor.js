let pensador = require("pensador");
let { getEmbed } = require("../util/getEmbed");
const gis = require("g-i-s");

module.exports = {
  name: "amor",
  aliases: "am",
  async execute(message) {
    pensador.getFromAmor().then((result) => {
      const textoJson = JSON.stringify(result);
      const frase = JSON.parse(textoJson);
      gis(frase["author"], logResults);
      async function logResults(error, results) {
        if (error) {
          console.log(error);
        } else {
          return message.channel.send({
            embeds: [
              getEmbed(
                `Frase de Amor`,
                `${frase["message"]}`,
                results[0].url,
                frase["author"],
                results[0].url
              ),
            ],
          });
        }
      }
    });
  },
};
