let dolday = () => {
  const { CronJob } = require("cron");
  const fetch = require("node-fetch");
  const getEmbed = require("./getEmbed");
  new CronJob("00 00 11 * * *", async () => {
    let url = `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL`;
    let response = await fetch(url);
    let json = await response.json();
    const textoJson = JSON.stringify(json);
    const moedas = JSON.parse(textoJson);
    let médiadol = moedas["USDBRL"]["ask"];
    let médiaeur = moedas["EURBRL"]["ask"];
    global.bot.channels.fetch("889601068718247968").then((channel) => {
      channel.send(
        getEmbed.getEmbed(
          `Cotação atual do:`,
          `
                            💵Dollar em R$: ${médiadol}
                            💶Euro  em R$: ${médiaeur}
                            `
        )
      );
    });
  }).start();
};

module.exports = { dolday };
