const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const clientId = process.env.CLIENTID;
const guildId = process.env.GUILD;

const commands = [];
const commandFiles = fs
  .readdirSync("./Slash")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./Slash/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.BOTTOKEN);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("É O REGISTRAS"))
  .catch(console.error);
