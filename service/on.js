const token = process.env.BOTTOKEN;
const { client } = require("../client");
const { amor } = require("./pensadorDayLove");
const { colecao } = require("./pensadorday");
const { sendLove } = require("./sendLove");
const { sendday } = require("./sendday");
const { dolday } = require("./senddol");
const { sendClimate } = require("./sendclimate");
const users = require("../users.json");

client.on("ready", async () => {
  let guildID = await client.guilds.fetch(process.env.GUILD);
  let channeldia = await guildID.channels.fetch(process.env.DIA);
  let channellove = await guildID.channels.fetch(process.env.LOVE);
  let channeldolar = await guildID.channels.fetch(process.env.DOLAR);
  let channelClimate = await guildID.channels.fetch(process.env.CLIMA);

  const { CronJob } = require("cron");
  new CronJob("00 00 11 * * *", () => {
    sendLove(amor, channellove);
    sendday(colecao, channeldia);
    dolday(channeldolar);
  }).start();
  let clima = new CronJob("00 00 11 * * *", async () => {
    sendClimate(channelClimate, "franca").then((res) => {
      if (res) channelClimate.send(res);
    });
    for (const user of users) {
      client.users.fetch(user.id).then((usr) => {
        sendClimate(usr, user.cidade).then((f) => {
          if (f) usr.send(f);
        });
      });
    }
  }).start();
});
client.login(token);
