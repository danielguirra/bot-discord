const { roleemoji } = require("./on-embed-role-manager");
const { getPensador } = require("./pensadorday");
const { getPensadorLove } = require("./pensadorDayLove");
const { dolday } = require("./dolday");
const { getReiniciar } = require("./logreiniciador");
global.bot.on("ready", () => {
  console.log("Online");
  global.bot.channels.fetch("862723926396370944").then((channel) => {
    global.bot.api
      .channels("862723926396370944")
      .messages(channel.lastMessageID)
      .delete("reboot");
  });
  roleemoji(
    (role1 = "818235920448487464"),
    (role2 = "818235836206153768"),
    (rolere = "707012360367505480")
  );
  getPensador();
  dolday();
  getReiniciar();
  getPensadorLove();
});
