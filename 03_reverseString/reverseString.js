const reverseString = function(string) {
    let newstr="";
    for(let i=0; i<=string.length; i++){
        newstr+=string.charAt(string.length-i);
    }
    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
