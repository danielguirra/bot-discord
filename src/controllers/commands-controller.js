const command = (msg) => {
    let member = msg.guild.member(msg.author);
    let embed = new Discord.MessageEmbed()
        .setColor("#6c856f")
        .setTitle(`Lista Comandos`).setDescription(`${member}
      Comandos para usar o Bot: 
        *d/ Roda um dado com valor que digitar após o d
        *hora/ Mostra o horário do servidor
        *img/ Pesquisa no Google Images 
        *gif/ Pesquisa no Tenor o um gif
        *aviso/ Cria uma caixinha com um aviso
     `);
    msg.reply(embed);
}

module.exports = { command }