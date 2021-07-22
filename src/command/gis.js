const gis = require('g-i-s')

module.exports = {
  name: 'img',
  discripton: 'Search google image return url image',
  execute(message, args) {
    const text = message.content.replace("*img", "")
    gis(text, logResults);
    function logResults(error, results) {
      if (error) {
        console.log(error)
      } else { return message.channel.send(results[0].url) }
    }
  }
}
