const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const checkDate = new Date();
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (
    Object.prototype.toString.call(date) !=
    Object.prototype.toString.call(checkDate)
  ) {
    throw new Error("Tricky error");
  }

  let season = "";
  let month = date.getMonth();
  if ((month >= 0 && month <= 1) || month == 11) season = "winter";
  if (month >= 2 && month <= 4) season = "spring";
  if (month >= 5 && month <= 7) season = "summer";
  if (month >= 8 && month <= 10) season = "autumn";
  return season;
};
