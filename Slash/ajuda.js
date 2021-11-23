const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("ajuda"),
  async execute(interaction) {
    const cargos = await interaction.guild.channels.fetch(
      process.env.CHANNELROLES
    );
    const bots = await interaction.guild.channels.fetch(
      process.env.CHANNELCOMMANDS
    );
    const role = await interaction.guild.roles.fetch(process.env.ROLEMOD);
    interaction.reply({
      embeds: [
        getEmbed(
          `Oque vc precisa? ${interaction.user.tag}           
            `,
          `Se precisa de cargos estão aqui:${cargos}
               Qualquer coisa pode perguntar a eles${role}
               Comandos:${bots} `
        ),
      ],
    });
  },
};
