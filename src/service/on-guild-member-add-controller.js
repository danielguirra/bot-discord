
global.bot.on("guildMemberAdd", async (member) => {
  console.log(member);
  channel.send(`Welcome to the server, ${member}!`, attachment);

  const channel = member.guild.channels.cache.find((channel) =>
    channel.name.includes("bem-vindo")
  );
  const regras = member.guild.channels.cache.find((channel) =>
    channel.name.includes("regras")
  );

  const message = `:wolf:Bem vindo <@${member.id}> ao servidor,\n  
  Por favor verificar nossas ${regras}:wolf:,
    se precisar de ajuda digite 'Ajuda' em qualquer canal`;

  channel.send(message);
  var role = member.guild.roles.cache.find(
    (role) => role.id === "707012360367505480"
  );
  member.roles.add(role);
});
