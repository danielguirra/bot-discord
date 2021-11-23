const getEmbed = require("../util/getEmbed");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("chuta o mencionado")
    .addUserOption((option) =>
      option.setName("target").setDescription("Cara a ser chutado")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    if (user) {
      const guild = interaction.guild;
      guild.members
        .kick(user)
        .then(() => {
          interaction.reply({
            embeds: [
              getEmbed.getEmbed(
                `${user.username}Chutado`,
                `Por ${interaction.author.tag}`,
                interaction.displayAvatarURL(),
                interaction.username,
                interaction.displayAvatarURL(),
                user.displayAvatarURL()
              ),
            ],
          });
        })
        .catch((err) => {
          interaction.reply({
            embeds: [getEmbed.getEmbed(`Erro`, `Não posso chutado`)],
          });
        });
    } else {
      interaction.reply({
        embeds: [getEmbed.getEmbed(`Erro`, `Ele tem que estar no servidor`)],
      });
    }
  },
};
