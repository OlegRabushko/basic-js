const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  return members
    .filter((el) => typeof el === "string")
    .map((el) => el.trim().toUpperCase())
    .sort()
    .map((el) => el[0])
    .join("");
};
