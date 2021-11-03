let getPensador = () => {
  let { getFromCollection } = require("pensador");
  let gis = require("g-i-s");
  let { getEmbed } = require("./getEmbed");
  const { CronJob } = require("cron");
  new CronJob("00 00 11 * * *", () => {
    getFromCollection().then((result) => {
      const textoJson = JSON.stringify(result);
      const frase = JSON.parse(textoJson);
      gis(frase["author"], logResults);
      async function logResults(error, results) {
        if (error) {
          console.log(error);
        } else {
          global.bot.channels.fetch("883409576140107866").then((channel) => {
            channel.send(
              getEmbed(
                `Frase de ${frase["author"]}`,
                `${frase["message"]}`,
                results[0].url,
                frase["author"],
                results[0].url
              )
            );
          });
        }
      }
    });
  }).start();
};

module.exports = { getPensador };
