const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = {
    turns: 0,
    seconds: 0,
  };
  a.turns = 2 ** disksNumber - 1;
  a.seconds = Math.floor((a.turns / turnsSpeed) * 3600);
  return a;
};
