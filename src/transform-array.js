const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev") {
        i++;
      }
      i++;
    } else if (arr[i] === "--discard-prev") {
      newArr.pop();
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1] !== undefined) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (newArr.length > 0) {
        newArr.push(newArr[newArr.length - 1]);
      }
    } else if (arr[i] !== undefined) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
