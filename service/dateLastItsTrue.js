const { default: axios } = require("axios");

function dateLastItsTrue(lastMessageChannelClimate) {
  let dateLastMessageChannelClimate = new Date(
    lastMessageChannelClimate.createdTimestamp
  );
  let dateLastMessageChannelClimateObjc = {
    month: dateLastMessageChannelClimate.getMonth() + 1,
    day: dateLastMessageChannelClimate.getDate(),
    timestamp: lastMessageChannelClimate.createdTimestamp,
  };

  let date = new Date();
  let dateFromNow = {
    mouth: date.getMonth() + 1,
    day: date.getDate(),
  };
  if (
    dateLastMessageChannelClimateObjc.day < dateFromNow.day &&
    dateLastMessageChannelClimateObjc.month < dateFromNow.mouth
  ) {
    return false;
  } else {
    return true;
  }
}
exports.dateLastItsTrue = dateLastItsTrue;
