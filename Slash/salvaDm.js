const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("saveuser")
    .setDescription("Salva usuário no banco pra dms"),
  async execute(interaction) {
    let coin = interaction.options.getString("input");
    let res;
    try {
      res = await axios.get(
        `https://economia.awesomeapi.com.br/last/${coin.toUpperCase()}-BRL`
      );
      interaction.reply({
        embeds: [
          getEmbed(
            res["data"][`${coin.toUpperCase()}BRL`]["name"],
            `  Até o momento
            *ALTA*:**${res["data"][`${coin.toUpperCase()}BRL`]["high"]}**
            -----------------
            *BAIXA*:**${res["data"][`${coin.toUpperCase()}BRL`]["low"]}**
            -----------------
            *MÉDIA*:**${res["data"][`${coin.toUpperCase()}BRL`]["ask"]}**
      `
          ),
        ],
      });
    } catch {
      interaction.reply({
        embeds: [
          getEmbed(
            "**ERRO**",
            `VERIFIQUE SUA MOEDA **${coin.toUpperCase()}** NÃO FOI ENCONTRADA`
          ),
        ],
      });
    }
  },
};
