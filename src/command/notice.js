const getEmbed = require('./getEmbed')

module.exports = {
    name: 'aviso',
    discription: 'Notice send channel',
    execute(message, args){
            message.delete();
            message.channel.send("@everyone");
            message.channel.send(getEmbed.getEmbed("Importante", `@everyone ${args}`));
          
    }
}