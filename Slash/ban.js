const { getEmbed } = require("../util/getEmbed");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bane o mencionado")
    .addUserOption((option) =>
      option.setName("target").setDescription("Cara a ser banido")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    if (user) {
      const guild = interaction.guild;
      guild.members
        .ban(user)
        .then(() => {
          interaction.reply({
            embeds: [
              getEmbed(
                `${user.username}Banido`,
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
            embeds: [getEmbed(`Erro`, `Não posso banir`)],
          });
        });
    } else {
      interaction.reply({
        embeds: [getEmbed(`Erro`, `Ele tem que estar no servidor`)],
      });
    }
  },
};
