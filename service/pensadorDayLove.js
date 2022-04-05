const { getFromAmor } = require("pensador");
let amor;
getFromAmor().then((result) => {
  if (result["message"] === undefined || result["author"] === undefined) {
    amor = "bug";
    return;
  }
  amor = result;
});

module.exports = { amor };
