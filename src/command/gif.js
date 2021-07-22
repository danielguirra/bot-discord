const fetch = require('node-fetch');

module.exports = {
  name: 'gif',
  discription: 'Search Tenor Gif return url',
  execute(message, args) {
    async function Gif() {
      let tokens = message.content.split(" ")//Gif
      if (tokens[0] === "*gif") {

        let searchGif = 'Capivara'

        if (tokens.length > 1) { searchGif = tokens.slice(1, tokens.length).join(' '); }

        let url = `https://g.tenor.com/v1/search?q=${searchGif}&key=${process.env.TENORKEY}&ContentFilter=G`
        let response = await fetch(url);
        let json = await response.json();
        const random = Math.floor(Math.random() * json.results.length);

        message.channel.send(json.results[random].url);
      }
    }
    Gif()
  }
}