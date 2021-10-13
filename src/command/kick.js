module.exports = {
  name: "kick",
  discription: "Kick controller",
  execute(message) {
    const { getEmbed } = require("../util/getEmbed");
    if (!message.guild) return;
    if (message.content.startsWith("*chutar")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick()
            .then(() => {
              message.channel.send(getEmbed("Expulso", `${user.tag}`));
            })
            .catch((err) => {
              message.channel.send(getEmbed("ERRO", "Não posso expulsar"));
              console.error(err);
            });
        } else {
          message.channel.send(
            getEmbed("ERRO", "Ele tem que estar no servidor!")
          );
        }
      } else {
        message.channel.send(
          getEmbed("ERRO", "Você não mencionou o usuário para expulsar!")
        );
      }
    }
  },
};
