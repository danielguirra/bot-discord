
const getEmbed = require('../command/getEmbed')

global.bot.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.find((channel) =>
    channel.name.includes("bem-vindo")
  );
  const regras = member.guild.channels.cache.find((channel) =>
    channel.name.includes("regras")
  );
  channel.send(getEmbed.getEmbed('Bem Vindo',
    `Bem vindo(a) <@${member.id}> ao servidor,  
     por favor verificar nossas ${regras},
     se precisar de ajuda digite '*ajuda' em qualquer canal`));

  var role = member.guild.roles.cache.find(
    (role) => role.id === "707012360367505480"
  );
  member.roles.add(role);
});
