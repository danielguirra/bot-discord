function getEmbed(title, description) {
    let embed = new Discord.MessageEmbed()
        .setColor("#6c856f")
        .setTitle(title)
        .setDescription(description);

    return embed;
}
global.bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('*kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .kick()
                    .then(() => {
                        message.channel.send(getEmbed('Expulso', `${user.tag}`));
                    })
                    .catch(err => {
                        message.channel.send(getEmbed('Não posso expulsar esse membro'))
                        console.error(err);
                    });
            } else {
                message.channel.send(getEmbed("Ele tem que estar no servidor!"));
            }
        } else {
            message.channel.send(getEmbed("Você não mencionou o usuário para expulsar!"));
        }
    }
});
