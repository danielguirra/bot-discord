const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require("fs");
const { getEmbed } = require("../util/getEmbed");

let user;
let guild;
let hora;
let avatar;
let userArray = [];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("salva")
    .setDescription("Salva usuário no banco pra dms")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("Digite o nome da sua cidade sem acento")
    ),
  async execute(interaction) {
    let cidade;
    const users = require("../users.json");
    if (interaction.type === "DEFAULT") {
      cidade = interaction.content.split("*salva ", "");
      hora = "8";
      avatar = interaction.author.avatarURL();

      user = interaction.author;
      guild = {
        id: interaction.guild.id,
        name: interaction.guild.name,
        members: interaction.guild.memberCount,
        hour: hora,
      };
    } else {
      cidade = interaction.options.getString("input");
      avatar = interaction.user.avatarURL();
      hora = "8";
      user = interaction.user;
      guild = {
        id: interaction.guild.id,
        name: interaction.guild.name,
        members: interaction.guild.memberCount,
      };
    }

    let userSave = {
      id: user.id,
      username: user.username,
      discriminator: user.discriminator,
      guildUser: guild,
      hour: hora,
      cidade,
    };

    for (const userold of users) {
      if (userold.id === userSave.id) {
        console.log(userold.id + " Banco");
        return interaction.reply("**Usuário já consta no banco**");
      }
    }
    userArray.push(userSave);
    fs.writeFile("./users.json", JSON.stringify(userArray), "utf-8", (f) => {
      if (f) throw f;
    });

    interaction.reply({
      embeds: [
        getEmbed(
          `**O Usuário ${userSave.username} foi Salvo no Banco**`,
          `
    **ID:** : ${user.id}
    **USUÁRIO**: ${user.username}
    **HORA PARA DMS** :${hora}
   `,
          "",
          "",
          "",
          avatar
        ),
      ],
    });
  },
};
