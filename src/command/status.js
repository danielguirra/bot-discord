const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');

module.exports = {
    name: "status",
    category: "info",
    aliases: ["stats"],
    description: "Show status bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    async execute(message, args) {
        const duration1 = moment.duration(message.client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();
        const embed = new MessageEmbed()
            .setColor("#e69e19")
            .setThumbnail(message.client.user.displayAvatarURL())
            .setFooter(`Request by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`**Status**
**= ESTÁTICAS =**
**• Servidores** : ${message.client.guilds.cache.size.toLocaleString()}
**• Canais** : ${message.client.channels.cache.size.toLocaleString()}
**• Usuários** : ${message.client.users.cache.size.toLocaleString()}
**• Discord.js** : v${version}
**• Node** : ${process.version}

**= SISTEMA =**
**• Plataforma** : ${os.type}
**• TEMPO DE ATIVIDADE** : ${duration1}
**• CPU** :
> **• Cores** : ${cpu.cores}
> **• Modelo** : ${os.cpus()[0].model} 
> **• Velocidade** : ${os.cpus()[0].speed} MHz
**• MEMÓRIA** :
> **• RAM Total** : ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps
> **• RAM Livre** : ${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps
> **• REDE Total** : ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps
> **• REDE Usada** : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps
`);
        message.channel.send(embed);
    }
}