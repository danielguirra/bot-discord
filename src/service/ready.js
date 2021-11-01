const { roleemoji } = require("./on-embed-role-manager");
const { getPensador } = require("../util/pensadorday");
const { getPensadorLove } = require("../util/pensadorDayLove");
const { dolday } = require("../util/dolday");
const { getReiniciar } = require("./logreiniciador");
const { brave } = require("../util/braveday");
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
  brave();
});
