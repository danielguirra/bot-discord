

const help = (msg) => {
  var role = msg.member.guild.roles.cache.find(
    (role) => role.id === "707000297490481262"
  );
  const cargo = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("cargo")
  );
  const bots = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("bots")
  );
  const channel = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("ajuda")
  );
  const message = `Se quiser saber como utilizar ganhar cargos está aqui: ${cargo},Agora se quiser saber como utiliziar os Bots está aqui: ${bots}
  Se nenhuma das opções ajudar entre em contato com um dos ${role} que irão te ajudar :wolf:`;
  msg.reply(message);
  ;
};

module.exports = { help }
