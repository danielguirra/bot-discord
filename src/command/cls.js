
module.exports = {
  name: 'cls',
  discription: 'Clean channel 99 message max',
  async execute(message) {
    const num = message.content.replace("*cls", "")
    message.delete();
    if (!isNaN(Number(num))) {
      message.channel.bulkDelete(1);
      message.channel.bulkDelete(num);
    }
  }
}
