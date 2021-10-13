module.exports = {
  name: "avatar",
  description: "return avatar URL",
  execute(message) {
    let user = message.mentions.users.first();
    if (!user) {
      user = message.guild.member(message.author);
    }
    const member = message.guild.member(user);
    message.channel.send(member.user.displayAvatarURL());
    message.react("🔍");
  },
};
