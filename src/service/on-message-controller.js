const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const roleemoji = require("./on-embed-role-manager");
const prefix = '*'


function getEmbed(title, description) {
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle(title)
    .setDescription(description);
  return embed
}
global.bot.on("message", async (msg) => {

  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();

    if (msg.content === prefix + "cargos") {
      msg.delete();
      roleemoji.roleemoji(msg);
    }

    if (msg.content === prefix + "hora") {
      hourController.currentTime(msg)
    }

    if (msg.content === prefix + "aviso") {
      msg.delete();
      msg.channel.send(getEmbed('Importante',
        `@everyone Bláblá`));//No bláblá coloque o recado lembre-se de usar no canal que quer enviar o aviso
    }

    if (msg.content === "ajuda") {
      h
      elpController.help(msg)
    }
    if (msg.content === "avatar") {
      msg.reply(msg.author.displayAvatarURL())
    }

    if (msg.content === "salve") {
      msg.reply("🐺")
    }

    if (text.includes("*d")) {
      diceController.dice(msg); //Dice roll
    }

    if (msg.content.toLowerCase().startsWith(prefix + "clovis")) {//comando limpa chat
      msg.delete();
      msg.channel.bulkDelete(30);
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
        msg.react('🙏');
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
