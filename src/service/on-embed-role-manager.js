

const  banana =  (msg) => {
  const Dev = msg.guild.roles.cache.find((role) => role.name === "Dev");
  const Gamer = msg.guild.roles.cache.find((role) => role.name === "gamer");
  const emojicomputer = ':computer:'
  var a = 0
  const embed = new Discord.MessageEmbed()
  .setColor('#fffff')
  .setTitle("Escolha Seus Cargos !")
  .setDescription("Clique no computador para liberação de Dev: :computer:\n Ou no Joystick para Gamer: :joystick:")
  ;
  if (a < 1) {
    msg.channel.send(embed);
    a + 1;
    const reactionEmoji = msg.guild.emojis.cache.find(
      (emoji) => emoji.name === "computer");
    if (reactionEmoji === "computer") {
       msg.react(reactionEmoji);}
  }

    

 
}





module.exports = { banana }