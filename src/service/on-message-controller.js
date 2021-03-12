const hourController = require("../controllers/hour-controller");
const helpController = require("../controllers/help-controller");

global.bot.on("message", (msg) => {
  if (msg.author.id !== msg.client.user.id) {
    const text = msg.content.toLowerCase().trim();
    const ifs = [
      { text: "hora", f: () => hourController.currentTime(msg) },
      { text: "ajuda", f: () => helpController.help(msg) },
      {
        text: "avatar",
        f: () =>
          msg.reply(
            `O seu avatar é esse::wolf::wolf::wolf::wolf:\n` +
              msg.author.displayAvatarURL()
          ),
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
          `Seu cargo foi atualizado com liberação de Gamer, boa partida até\n:wolf::wolf:`
        );
        msg.member.roles.remove(rolere);
      } else if (rText === "dev") {
        var role = msg.member.guild.roles.cache.find(
          (role) => role.id === "818235920448487464"
        );
        msg.member.roles.add(role);
        msg.reply(
          `Seu cargo foi atualizado com liberação de Dev, bom estudo até\n:wolf::wolf:`
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

    // if (text === "avatar") {
    // msg.reply(
    //   `O seu avatar é esse::wolf::wolf::wolf::wolf:\n` +
    //     msg.author.displayAvatarURL()
    // );
    // }
    // if (text === "naruto") {
    //   msg.reply(
    //     "-p https://www.youtube.com/watch?v=Xc7lUbWEbqY&list=RDXc7lUbWEbqY"
    //   );
    // }
    // if (text === "alok") {
    //   msg.reply(
    //     "-p https://open.spotify.com/playlist/37i9dQZF1DWZUWZIwpqsT3#_=_"
    //   );
    // }
    // if (text === "servidor") {
    //   msg.channel.send(
    //     `Nome do Serv: ${msg.guild.name}\nTotal de Animais: ${msg.guild.memberCount}:wolf:`
    //   );
    // }
    // if (text === `usuario`) {
    //   msg.channel.send(
    //     `Seu Nome de Usuário: ${msg.author.username}\nSeu ID: ${msg.author.id}:wolf:`
    //   );
    // }
  }
});
