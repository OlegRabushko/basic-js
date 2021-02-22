// const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return arr.find((el) => Array.isArray(el))
      ? this.calculateDepth(arr.flat(), ++depth)
      : depth;
  }
};
