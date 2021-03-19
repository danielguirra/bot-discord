global.Discord = require("discord.js");
global.bot = new Discord.Client();
bot.login(process.env.BOTTOKEN);
