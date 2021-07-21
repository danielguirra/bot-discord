const Discord = require("discord.js");
const fs = require('fs')
const client = new Discord.Client();
client.login('ODExMjU1MzA3NjczMDEwMjQ2.YCviYQ.NCikGHbEQuyrA8rB8blZEth_bCk')

const prefix = '*'


client.once('ready', () => {
    console.log('Ready!');
});
client.commands = new Discord.Collection()

const commandsFiles = fs.readdirSync('./').filter(file => file.endsWith('.js'))

for (const file of commandsFiles) {
    const command = require(`./${file}`)
    client.commands.set(command.name, command)
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return

    try {
        client.commands.get(command).execute(message, args)
    } catch (error) {
        console.error(error)
        message.reply('Não é um comando válido digite *comandos')
    }

});
