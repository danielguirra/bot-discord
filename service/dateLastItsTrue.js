function dateLastItsTrue(lastMessageChannelClimate) {
  const dateLastMessageChannelClimate = new Date(
    lastMessageChannelClimate.createdTimestamp
  );
  const dateLastMessageChannelClimateObjc = {
    month: dateLastMessageChannelClimate.getMonth() + 1,
    day: dateLastMessageChannelClimate.getDate(),
    hour: dateLastMessageChannelClimate.getHours(),
    timestamp: lastMessageChannelClimate.createdTimestamp,
  };
  const date = new Date();
  const dateFromNow = {
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
  };
  if (
    dateLastMessageChannelClimateObjc.day < dateFromNow.day &&
    dateLastMessageChannelClimateObjc.month < dateFromNow.month &&
    dateLastMessageChannelClimateObjc.hour < dateFromNow.hour
  ) {
    return true;
  } else {
    return false;
  }
}
exports.dateLastItsTrue = dateLastItsTrue;
