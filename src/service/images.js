const fs = require("fs");
const path = require("path");
const { MessageAttachment } = require("discord.js");
const images = (msg) => {
  const image = fs.readFileSync(path.join(__dirname, "./images/capivara.jpg"));
  const attachment = new MessageAttachment( //Para enviar images use o 'image' , se não URL direto
    image)
  //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b9171947-75ad-4c3e-8914-57a19b99139a/db7ys6w-08c7d786-b859-4c3f-b180-051d9914f9f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjkxNzE5NDctNzVhZC00YzNlLTg5MTQtNTdhMTliOTkxMzlhXC9kYjd5czZ3LTA4YzdkNzg2LWI4NTktNGMzZi1iMTgwLTA1MWQ5OTE0ZjlmNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.h8ucop6slJyWC1HM58lxuLHtcf60Jde3kiB8TnzWX2Y"
  //);
  const image2 = fs.readFileSync(path.join(__dirname, "./images/capivara (2).jpg"));
  const attachment2 = new MessageAttachment( //Para enviar images use o 'image' , se não URL direto
    image2)
  msg.channel.send("***Kawaii***", attachment);
  msg.channel.send("***Kawaii***", attachment2);
};
module.exports = { images };
