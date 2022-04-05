const fs = require("fs");
const { Collection } = require("discord.js");
const { client } = require("./client");
require("dotenv").config();
require("./deploy-commands");
const prefix = process.env.PREFIX;
exports.prefix = prefix;
client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./Slash")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./Slash/${file}`);
  client.commands.set(command.data.name, command);
}
require("./service/index");
require("./client");
