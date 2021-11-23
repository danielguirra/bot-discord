const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription(
      "Obtenha a URL do avatar do usuário selecionado ou do seu próprio avatar."
    )
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("O avatar do usuário para mostrar")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("target");
    if (user)
      return interaction.reply(
        `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    return interaction.reply(
      `Seu avatar ${interaction.user.displayAvatarURL({ dynamic: true })}`
    );
  },
};
