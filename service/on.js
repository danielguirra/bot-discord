const { client } = require("../client");
const { dayNews } = require("./dayNews");
const { CronJob } = require("cron");
const { dateLastItsTrue } = require("./dateLastItsTrue");

const token = process.env.BOTTOKEN;

client
  .on("ready", async () => {
    let guildID = await client.guilds.fetch(process.env.GUILD);
    let channeldia = await guildID.channels.fetch(process.env.DIA);
    let channellove = await guildID.channels.fetch(process.env.LOVE);
    let channeldolar = await guildID.channels.fetch(process.env.DOLAR);
    let channelClimate = await guildID.channels.fetch(process.env.CLIMA);
    let lastMessageIdChannelClimate = await channelClimate.lastMessageId;
    let lastMessageChannelClimate = await channelClimate.messages.fetch(
      lastMessageIdChannelClimate
    );
    let dateLastMessageChannelClimateObjc = dateLastItsTrue(
      lastMessageChannelClimate
    );
    if (dateLastMessageChannelClimateObjc) {
      dayNews(channellove, channeldia, channeldolar, channelClimate);
    } else {
      new CronJob("00 00 11 * * *", () => {
        dayNews(channellove, channeldia, channeldolar, channelClimate);
      }).start();
    }
  })
  .login(token);
