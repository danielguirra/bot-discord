const {
  KingJamesVersiculo,
  KingJamesLivro,
  KingJamesNomes,
} = require("bible-pt");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const getEmbed = require("../util/getEmbed");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require("fs");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("versiculo")
    .setDescription("retorna o versiculo passado"),
  // .addIntegerOption((options) =>
  //   options
  //     .setName("versiculo")
  //     .setDescription("digite o numero do versiculo")
  // )
  async execute(interaction) {
    let options = [];

    async function criaarray() {
      let nomes = await KingJamesNomes();
      let c = 0;
      while (c <= 24) {
        let livrus = {
          label: nomes[c]["id"],
          description: nomes[c]["name"],
          value: c.toString(),
        };
        c++;
        options.push(livrus);
        //fs.writeFileSync("./teste.json", JSON.stringify(options), "utf-8");
      }
    }
    await criaarray();
    console.log(options);
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("select")
        .setPlaceholder("Escolha o Livro")
        .addOptions(options)
    );
    try {
      await interaction.reply({
        content: "**Biblia**",
        components: [row],
      });
    } catch (error) {
      console.log(error);
    }

    // let livro = interaction.options.getString("livro");
    // let capitulo = interaction.options.getInterger("capitulo");
    // // let versiculo = interaction.options.getInterger("versiculo");
    // console.log(livro);
    // console.log(capitulo);
    // // console.log(versiculo);
    // let bibleCompleta = async () => {
    //   let retornos = await KingJamesVersiculo(livro, 23, 1);
    //   console.log(typeof retornos);
    //   interaction.reply(retornos);
    // };
    // bibleCompleta();
  },
};
