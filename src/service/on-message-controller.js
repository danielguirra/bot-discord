const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const command = require("../controllers/commands-controller");
const roleemoji = require("./on-embed-role-manager");
const fetch = require('node-fetch');
const prefix = "*";
const images = require('../controllers/image-controller');
var gis = require('g-i-s')

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

    if (text.toLowerCase().startsWith("*img")) {
      const args = msg.content.replace("*img", "")
      gis(args, logResults);
      function logResults(error, results) {
        if (error) {
          console.log(error)
        } else { return msg.channel.send(results[0].url) }
      }
    }

    if (text === prefix + "cargos") {
      msg.delete();
      const Dev = "818235920448487464"
      const Gamer = "818235836206153768"
      var rolere = "707012360367505480"
      roleemoji.roleemoji(Dev, Gamer, rolere);
    }

    if (text === prefix + "comandos") { command.command(msg); }

    if (text === prefix + "hora") { hourController.currentTime(msg); }

    if (text === "capivara") { images.images(msg); }

    let tokens = msg.content.split(" ")//Gif
    if (tokens[0] === prefix + "gif") {

      let searchGif = 'Capivara'

      if (tokens.length > 1) { searchGif = tokens.slice(1, tokens.length).join(' '); }

      let url = `https://g.tenor.com/v1/search?q=${searchGif}&key=${process.env.TENORKEY}&ContentFilter=G`
      let response = await fetch(url);
      let json = await response.json();
      const random = Math.floor(Math.random() * json.results.length);

      msg.channel.send(json.results[random].url);
    }

    if (text.toLowerCase().startsWith("*aviso")) {

      const rText = text.replace("*aviso", "").trim();

      msg.delete();
      msg.channel.send("@everyone");
      msg.channel.send(getEmbed("Importante", `@everyone ${rText}`));
    }

    if (text === "ajuda") { helpController.help(msg); }//command help

    if (text === prefix + "avatar") { msg.reply(msg.author.displayAvatarURL()) }

    if (text === prefix + 'd') { diceController.dice(msg); } //Dice roll

    if (text.toLowerCase().startsWith("*cls")) {//command clean channel

      const rText = text.replace("*cls", "").trim();

      msg.delete();
      if (!isNaN(Number(rText))) {
        msg.channel.bulkDelete(1);
        msg.channel.bulkDelete(rText);
      }
    }

    if (msg.author.id === "409772439137026050") {
      try {
        msg.react(":]");
      } catch (error) {
        msg.reply("Capivara");
      }
    }
  }
});
