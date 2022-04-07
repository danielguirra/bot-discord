const { client } = require("../client");
const { sendLove } = require("./sendLove");
const { sendday } = require("./sendday");
const { dolday } = require("./senddol");
const { sendClimate } = require("./sendclimate");
const users = require("../users.json");

function dayNews(channellove, channeldia, channeldolar, channelClimate) {
  sendLove(channellove);
  sendday(channeldia);
  dolday(channeldolar);
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
}
exports.dayNews = dayNews;
