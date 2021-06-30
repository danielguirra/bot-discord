const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const roleemoji = require("./on-embed-role-manager");
const prefix = "*";

function getEmbed(title, description) {
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle(title)
    .setDescription(description);
  return embed;
}
global.bot.on("message", async (msg) => {
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();

    if (text === prefix + "cargos") {
      msg.delete();
      roleemoji.roleemoji(msg);
    }
    if (text === prefix + "hora") {
      hourController.currentTime(msg);
    }

    if (text === prefix + "aviso") {
      msg.delete();
      msg.channel.send("@everyone");
      msg.channel.send(getEmbed("Importante", `@everyone Bláblá`)); //No bláblá coloque o recado lembre-se de usar no canal que quer enviar o aviso
    }

    if (text === "ajuda") {
      helpController.help(msg);
    }
    if (text === "avatar") {
      msg.reply(msg.author.displayAvatarURL());
    }

    if (text === "salve") {
      msg.reply("Eae");
    }

    if (text.includes("*d")) {
      diceController.dice(msg); //Dice roll
    }

    if (text.toLowerCase().startsWith("cls")) {
      //comando limpa chat
      const rText = text.replace("cls", "").trim();
      msg.delete();
      if (!isNaN(Number(rText))) {
        msg.channel.bulkDelete(1);
        msg.channel.bulkDelete(rText);
      }
    }

    if (msg.author.id === "409772439137026050") {
      try {
        msg.react("👓");
      } catch (error) {
        msg.reply("Capivara");
      }
    }

    if (msg.author.id === "454452038915457037") {
      try {
        msg.react("🙏");
      } catch (error) {
        msg.reply("Uga");
      }
    }

    if (msg.author.id === "473630307514449947") {
      try {
        msg.react("👽");
      } catch (error) {
        msg.reply("alien");
      }
    }
  }
});
