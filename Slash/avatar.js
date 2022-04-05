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
    let user;
    let avatar;
    if (interaction.type === "DEFAULT") {
      avatar = interaction.author.displayAvatarURL();
      user = interaction.mentions.users.first();
    } else {
      avatar = interaction.user.displayAvatarURL();
      user = interaction.options.getUser("target");
    }

    if (user)
      return interaction.reply(
        `${user.username} avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    return interaction.reply(`Seu avatar: ${avatar}`);
  },
};
