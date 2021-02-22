const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const data = parseFloat(sampleActivity);
  const logarithm = 0.693;
  const formula = logarithm / HALF_LIFE_PERIOD;
  if (data > 0 && data < 15 && typeof sampleActivity === "string") {
    const date = Math.ceil(MODERN_ACTIVITY / data / formula);
    return date;
  }
  return false;
};
