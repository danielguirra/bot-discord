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
  console.log(`Command slash load ${file.toUpperCase()}`);
}
const commandFiles2 = fs
  .readdirSync("./command")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles2) {
  const command = require(`./command/${file}`);
  client.commands.set(command.name, command);
  client.commands.set(command.aliases, command);
  console.log(`Command message load ${file.toUpperCase()}`);
}
require("./service/index");
require("./client");
