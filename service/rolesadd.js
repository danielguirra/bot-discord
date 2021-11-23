const { client } = require("../client");

client.on("messageReactionAdd", async (reaction, user) => {
  let role1 = "818235920448487464";
  let role2 = "818235836206153768";
  let rolere = "707012360367505480";
  if (reaction.message.id != "905484993625718814") return;
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message:", error);
      return;
    }
  }
  if (reaction.emoji.name === "💻") {
    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
    await reaction.message.guild.members.cache
      .get(user.id)
      .roles.remove(rolere);
  }
  if (reaction.emoji.name === "🕹") {
    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
    await reaction.message.guild.members.cache
      .get(user.id)
      .roles.remove(rolere);
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  let role1 = "818235920448487464";
  let role2 = "818235836206153768";
  if (reaction.message.id != "905484993625718814") return;
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message:", error);
      return;
    }
  }
  if (reaction.emoji.name === "💻") {
    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
  }
  if (reaction.emoji.name === "🕹") {
    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
  }
});
