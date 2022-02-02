const { SlashCommandBuilder } = require("@discordjs/builders");
const fs = require("fs");
const users = require("../users.json");
const { getEmbed } = require("../util/getEmbed");

let user;
let guild;
let hora;
let avatar;
let userArray = [];

async function userExist(user, userFinal) {
  let ifUser = userFinal.findIndex((usr) => (usr = user.id));
  if (ifUser < 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("salva")
    .setDescription("Salva usuário no banco pra dms")
    .addIntegerOption((option) =>
      option.setName("input").setDescription("digite a hora ")
    ),
  async execute(interaction) {
    for (const user of users) {
      userArray.push(user);
    }
    if (interaction.type === "DEFAULT") {
      hora = interaction.content.replace("*salva ", "");
      avatar = interaction.author.avatarURL();

      user = interaction.author;
      guild = {
        id: interaction.guild.id,
        name: interaction.guild.name,
        members: interaction.guild.memberCount,
        hour: hora,
      };
    } else {
      avatar = interaction.user.avatarURL();
      hora = interaction.options.getInteger("input");
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
    };
    let resul = await userExist(user, userArray);
    if (resul) return interaction.reply("**Usuário já consta no banco**");
    userArray.push(userSave);

    fs.writeFile("./users.json", JSON.stringify(userArray), "utf-8", (err) => {
      if (err) throw err;
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
