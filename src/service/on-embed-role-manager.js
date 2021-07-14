const roleemoji = async (Dev, Gamer, rolere) => {


  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle("Escolha Seus Cargos !")
    .setDescription(
      "Clique no computador para liberação de Dev: :computer:\n Ou no Joystick para Gamer: :joystick:"
    );


  global.bot.channels.fetch('862723926396370944')
    .then(channel => {
      channel.send({ embed: embed }).then((embedMessage) => {
        embedMessage.react("💻");
        embedMessage.react("🕹");
      });



      global.bot.on(
        "messageReactionAdd",
        async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;
          if (reaction.message.channel.id === channel) {
            if (reaction.emoji.name === "💻") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(Dev);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(rolere);
            }
            if (reaction.emoji.name === "🕹") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(Gamer);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(rolere);
            }
          } else {
            return;
          }
        },
        global.bot.on("messageReactionRemove", async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;
          if (reaction.message.channel.id === channel) {
            if (reaction.emoji.name === "💻") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(Dev);
            }
            if (reaction.emoji.name === "🕹") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(Gamer);
            }
          } else {
            return;
          }
        })
      );
    });
}
module.exports = { roleemoji };
