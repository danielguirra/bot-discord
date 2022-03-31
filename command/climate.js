const { sendClimateCurrentTime } = require("../service/sendclimate");

module.exports = {
  name: "clima",
  async execute(message) {
    const text = message.content.replace("*clima ", "");
    sendClimateCurrentTime(message.channel, text).then((f) => {
      if (f) console.log(f);
    });
  },
};
