const removeFromArray = function (...args) {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
