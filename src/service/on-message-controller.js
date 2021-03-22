const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");
const diceController = require("../controllers/dice-controller");
const fs = require("fs");
const path = require("path");
const { MessageAttachment } = require("discord.js");
const prefix = "*";
global.bot.on("message", (msg) => {
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();
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

    if (text.includes("-cargo")) {
      const rText = text.replace("-cargo", "").trim();
      var rolere = msg.member.guild.roles.cache.find(
        (role) => role.id === "707012360367505480"
      );
      if (rText === "games") {
        var role = msg.member.guild.roles.cache.find(
          (role) => role.id === "818235836206153768"
        );
        msg.member.roles.add(role);
        msg.reply(
          `Seu cargo foi atualizado com liberação de Gamer, boa partida até\n:`
        );
        msg.member.roles.remove(rolere);
      } else if (rText === "dev") {
        var role = msg.member.guild.roles.cache.find(
          (role) => role.id === "818235920448487464"
        );
        msg.member.roles.add(role);
        msg.reply(
          `Seu cargo foi atualizado com liberação de Dev, bom estudo até\n`
        );
        msg.member.roles.remove(rolere);
      } else {
        const informacoes = msg.member.guild.channels.cache.find((channel) =>
          channel.name.includes("informações")
        );
        msg.reply(
          `:wolf:Por favor verique se digitou certo o cargo de desejado no ${informacoes}:wolf:`
        );
      }
    }
    if (msg.author.id === "409772439137026050" || text.includes("corvo")) {
      const reactionEmoji = msg.guild.emojis.cache.find(
        (emoji) => emoji.name === "corvo_itachi"
      );
      msg.react(reactionEmoji);
    }
    if (msg.author.id === "324622323447496705") {
      const reactionEmoji = msg.guild.emojis.cache.find(
        (emoji) => emoji.name === "malzahar"
      );
      msg.react(reactionEmoji);
    }
    if (msg.content === "ww") {
      const attachment = new MessageAttachment(
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b9171947-75ad-4c3e-8914-57a19b99139a/db7ys6w-08c7d786-b859-4c3f-b180-051d9914f9f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjkxNzE5NDctNzVhZC00YzNlLTg5MTQtNTdhMTliOTkxMzlhXC9kYjd5czZ3LTA4YzdkNzg2LWI4NTktNGMzZi1iMTgwLTA1MWQ5OTE0ZjlmNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.h8ucop6slJyWC1HM58lxuLHtcf60Jde3kiB8TnzWX2Y"
      );
      msg.reply("vadivick", attachment);
    }
  }
});
