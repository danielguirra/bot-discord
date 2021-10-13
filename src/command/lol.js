const lol = require("lol-discord");

lol.SetLanguage("en");

lol.SetLocale("br1");

module.exports = {
  name: "lol",
  execute(message) {
    const num = message.content.replace("*lol", "");
    lol
      .Search(num)
      .then((embed_msg) => {
        message.reply({ embed: embed_msg });
      })
      .catch((err) => {
        message.reply(err);
      });
  },
};
