const { getEmbed } = require("../util/getEmbed");

const roleemoji = async (role1, role2, rolere) => {
  let embed = getEmbed(
    "Pegue aqui seu cargo(os)!",
    "Clique no computador para liberação de Dev: :computer:\n Ou no Joystick para Gamer: :joystick:"
  );
  global.bot.channels.fetch("862723926396370944").then((channel) => {
    channel.send({ embed: embed }).then((embedMessage) => {
      embedMessage.react("💻");
      embedMessage.react("🕹");

      global.bot.on(
        //wait for the reaction to add the role based on the id
        "messageReactionAdd",
        async (reaction, user) => {
          const channel = "862723926396370944";
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;
          if (reaction.message.channel.id === channel) {
            if (reaction.emoji.name === "💻") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(role1);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(rolere);
            }
            if (reaction.emoji.name === "🕹") {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(role2);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(rolere);
            }
          } else {
            return;
          }
        },

        global.bot.on(
          "messageReactionRemove", //wait for the reaction to remove the role based on the id
          async (reaction, user) => {
            const channel = "862723926396370944";
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id === channel) {
              if (reaction.emoji.name === "💻") {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(role1);
              }
              if (reaction.emoji.name === "🕹") {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(role2);
              }
            } else {
              return;
            }
          }
        )
      );
    });
  });
};

module.exports = { roleemoji };
