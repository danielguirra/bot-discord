const { SlashCommandBuilder } = require("@discordjs/builders");
const { getEmbed } = require("../util/getEmbed");

module.exports = {
  data: new SlashCommandBuilder().setName("ajuda").setDescription("ajuda"),
  async execute(interaction) {
    if (interaction.type === "DEFAULT") {
      let role = interaction.member.guild.roles.cache.find(
        (role) => role.id === process.env.ROLEMOD
      );
      const cargo = interaction.member.guild.channels.cache.find(
        (channel) => channel.id === process.env.CHANNELROLES
      );
      const bots = interaction.member.guild.channels.cache.find(
        (channel) => channel.id === process.env.CHANNELCOMMANDS
      );
      return interaction.reply({
        embeds: [
          getEmbed(
            `Meu chamou?`,
            `${interaction.author}
     Se precisa de cargos estão aqui: ${cargo},
     Comandos: ${bots}
     Qualquer coisa pode perguntar a eles ${role}que irão te ajudar!`
          ),
        ],
      });
    } else {
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
            `Oque vc precisa?          
            `,
            `
             ${interaction.user} 
                Se precisa de cargos estão aqui:${cargos}
                Comandos:${bots}
                Qualquer coisa pode perguntar a eles${role} que irão te ajudar!`
          ),
        ],
      });
    }
  },
};
