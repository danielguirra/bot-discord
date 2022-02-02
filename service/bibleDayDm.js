const { CapituloDoDiaKingJames } = require("bible-pt");
const { client } = require("../client");
const { default: axios } = require("axios");
const users = require("../users.json");
const { getEmbed } = require("../util/getEmbed");
const { CronJob } = require("cron");
const { sendClimate } = require("./sendclimate");
CapituloDoDiaKingJames().then((f) => {
  new CronJob("00 00 11 * * *", () => {
    for (const user of users) {
      client.users.fetch(user.id).then((usr) => {
        let vers = axios.get(`${f.url}/1`).then((vec) => {
          sendClimate(usr).then((f) => {
            if (f) console.log(f);
          });
          usr.send({
            embeds: [
              getEmbed(
                f.data,
                JSON.stringify(vec.data),
                "",
                JSON.stringify(f.data),
                "",
                "",
                "",
                f.url
              ),
            ],
          });
        });
      });
    }
  }).start();
});
