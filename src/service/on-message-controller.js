const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const images = require("./images");
const roleemoji = require("./on-embed-role-manager");
global.bot.on("message", async (msg) => {
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();
    if (msg.content === "Daniel Lindo") {
      roleemoji.roleemoji(msg);
    }
    const ifs = [
      { text: "hora", f: () => hourController.currentTime(msg) },
      { text: "ajuda", f: () => helpController.help(msg) },
      {
        text: "avatar",
        f: () =>
          msg.reply(`O seu avatar é esse:\n` + msg.author.displayAvatarURL()),
      },
      {
        text: "salve",
        f: () =>
          msg.reply(
            "Auuuuuuuuuuuuuuuuuuuuuu:wolf::wolf::wolf::wolf::wolf::wolf::wolf::wolf:"
          ),
      },
    ];
    for (const myIf of ifs) {
      if (myIf.text === text) {
        myIf.f();
        break;
      }
    }
    if (text.includes("*d")) {
      diceController.dice(msg); //Dice roll
    }
    if (msg.author.id === "409772439137026050") {
      try {
        msg.react('🐀');
      } catch (error) {
        msg.reply("MUKEY");
      }
    }
    if (msg.author.id === "324622323447496705") {
      try {
        msg.react('🐈');
      } catch (error) {
        msg.reply("MIAUUUU");
      }
    }
    if (msg.author.id === "454452038915457037") {
      try {
        msg.react('🔪');
      } catch (error) {
        msg.reply("OLHA A FACA");
      }
    }
    if (msg.author.id === "473630307514449947") {
      try {
        msg.react('👽');
      } catch (error) {
        msg.reply("alien");
      }
    }
  }
});
