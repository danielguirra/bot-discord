
global.bot.on("guildMemberAdd", async (member) => {
  console.log(member);
  const channel = member.guild.channels.cache.find((channel) =>
    channel.name.includes("bem-vindo")
  );
  const regras = member.guild.channels.cache.find((channel) =>
    channel.name.includes("regras")
  );
  let embed = new Discord.MessageEmbed()
    .setColor("#6c856f")
    .setTitle('Bem Vindo')
    .setDescription(`
    Bem vindo(a) <@${member.id}> ao servidor,  
    por favor verificar nossas ${regras},
    se precisar de ajuda digite 'Ajuda' em qualquer canal`)
  channel.send({ embed: embed }).then((embedMessage) => {
    embedMessage.react("😁");
    embedMessage.react("😀");
  });
  var role = member.guild.roles.cache.find(
    (role) => role.id === "707012360367505480"
  );
  member.roles.add(role);
});
