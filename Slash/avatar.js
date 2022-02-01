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
    if (interaction.type === "APPLICATION_COMMAND") {
      user = interaction.options.getUser("target");
    } else {
      user = interaction.mentions.users.first();
    }
    if (user != undefined) {
      return interaction.reply(
        `${user.username} avatar: ${user.displayAvatarURL({ dynamic: true })}`
      );
    } else {
      return interaction.reply("Verifique se foi marcado o usuário");
    }
  },
};
