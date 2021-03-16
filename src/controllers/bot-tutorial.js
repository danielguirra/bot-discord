const tutorial = (msg) => {
  const bots = msg.member.guild.channels.cache.find((channel) =>
    channel.name.includes("bots")
  );
  var role = msg.member.guild.roles.cache.find(
    (role) => role.id === "763132019873415248"
  );
  const message = `Para utilizar os ${role}`;
  channel.send(message);
};
module.exports = { tutorial };
//Obs para enviar avisos;
