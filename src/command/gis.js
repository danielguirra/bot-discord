const gis = require('g-i-s')

module.exports = {
  name: 'img',
  discripton: 'Search google return image return URL',
  execute(message, args) {
    const text = message.content.replace("*img", "")
    gis(text, logResults);
    async function logResults(error, results) {
      if (error) {
        console.log(error)
      } else { return await message.channel.send(results[0].url) }
    }
  }
}
