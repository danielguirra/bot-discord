const { getEmbed } = require("../util/getEmbed");
const { client } = require("../client");

client.on("guildMemberAdd", async (member) => {
  let rolecapivara = process.env.ROLECAPIVARA;
  const bem = member.guild.channels.cache.find((channel) =>
    channel.name.includes("bem-vindo")
  );
  const regras = member.guild.channels.cache.find((channel) =>
    channel.name.includes("regras")
  );
  const cargos = member.guild.channels.cache.find((channel) =>
    channel.name.includes("cargos")
  );

  member.roles.add(rolecapivara);

  bem.send({
    embeds: [
      getEmbed(
        `Seja Bem vindo ${member.displayName}`,
        `${member}
    Nossa regras estão aqui:${regras}
    Precisar de ajuda digite *ajuda ou use /ajuda
    Não esqueça de pegar seu cargo no :${cargos}`,
        member.user.avatarURL(),
        member.user.tag,
        member.user.avatarURL(),
        "https://i.im.ge/2021/11/03/oN8EiT.png",
        member.displayHexColor
      ),
    ],
  });
});
