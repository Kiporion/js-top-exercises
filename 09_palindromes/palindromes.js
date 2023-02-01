const palindromes = function (str) {
    let newStr = str.replace(/[.,\/#!$%\^&\*; :{}=\-_`~()]/g,"").toLowerCase();
    let len = Math.floor(newStr.length / 2);
    for (let i = 0; i < len; i++)
      if (newStr[i] !== newStr[newStr.length - i - 1])
        return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
