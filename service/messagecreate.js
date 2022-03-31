const { prefix } = require("../index");
const { client } = require("../client");
client.on("messageCreate", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  try {
    client.commands.get(command).execute(message);
  } catch (error) {
    console.error(error);
    return;
  }
});
