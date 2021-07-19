const roleemoji = require("./on-embed-role-manager");

global.bot.on("ready", () => {
  console.log("Dale");
  const Dev = "818235920448487464"
  const Gamer = "818235836206153768"
  var rolere = "707012360367505480"
  global.bot.channels.fetch('862723926396370944')
    .then(channel => {
      message = channel.lastMessageID
      global.bot.api.channels('862723926396370944').messages(message).delete('reboot')
    })
  roleemoji.roleemoji(Dev, Gamer, rolere)
});
