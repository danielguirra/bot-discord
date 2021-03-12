const help = (msg) => {
  var role = msg.member.guild.roles.cache.find(
    (role) => role.id === "707000297490481262"
  );
  const informacoes = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("informações")
  );
  const bots = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("bots")
  );
  const channel = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("ajuda")
  );
  const message = `<@${msg.member.id}>:wolf:Se quiser saber como utilizar ganhar cargos está aqui: ${informacoes},\n
Agora se quiser saber como utiliziar os Bots está aqui: ${bots}\n
Se nenhuma das opções ajudar entre em contato com um dos ${role} que irão te ajudar :wolf::wolf:`;
  channel.send(message);
};

module.exports = { help };
