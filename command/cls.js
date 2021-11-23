module.exports = {
  name: "cls",
  discription: "Clean channel 99 message max",
  async execute(message) {
    const num = message.content.replace("*cls", " ");
    if (!isNaN(Number(num))) {
      try {
        message.channel.bulkDelete(num);
      } catch (error) {
        return;
      }
    }
  },
};
