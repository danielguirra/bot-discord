

const roleemoji = async (msg) => {
  const Dev = msg.guild.roles.cache.find((role) => role.id === "818235920448487464");
  const Gamer = msg.guild.roles.cache.find((role) => role.id === "818235836206153768");
  const channel = '844950448740892672'
  var rolere = msg.member.guild.roles.cache.find(
    (role) => role.id === "707012360367505480"
  );
  var a = 0
  let embed = new Discord.MessageEmbed()
    .setColor('#fffff')
    .setTitle("Escolha Seus Cargos !")
    .setDescription("Clique no computador para liberação de Dev: :computer:\n Ou no Joystick para Gamer: :joystick:")
    ;


  const reactionEmoji = msg.guild.emojis.cache.find(
    (emoji) => emoji.name === "computer");
  msg.channel.send({ embed: embed }).then(embedMessage => {
    embedMessage.react("💻");
    embedMessage.react("🕹")
  });

  global.bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === channel) {
      if (reaction.emoji.name === "💻") {
        await reaction.message.guild.members.cache.get(user.id).roles.add(Dev);
        await reaction.message.guild.members.cache.get(user.id).roles.remove(rolere)
      }
      if (reaction.emoji.name === "🕹") {
        await reaction.message.guild.members.cache.get(user.id).roles.add(Gamer);
        await reaction.message.guild.members.cache.get(user.id).roles.remove(rolere)
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
          await reaction.message.guild.members.cache.get(user.id).roles.remove(Dev);
        }
        if (reaction.emoji.name === "🕹") {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(Gamer);
        }
      } else {
        return;
      }
    }

    ));





}





module.exports = { roleemoji }