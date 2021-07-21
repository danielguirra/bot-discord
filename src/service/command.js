const Discord = require("discord.js");
const fs = require('fs')

const prefix = '*'

global.bot.commands = new Discord.Collection()

const commandsFiles = fs.readdirSync('./src/command').filter(file => file.endsWith('.js'))

for (const file of commandsFiles) {
    const command = require(`../command/${file}`)
    global.bot.commands.set(command.name, command)
}

global.bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!global.bot.commands.has(command)) return

    try {
        global.bot.commands.get(command).execute(message, args)
    } catch (error) {
        console.error(error)
        message.reply('Não é um comando válido digite *comandos')
    }

});
