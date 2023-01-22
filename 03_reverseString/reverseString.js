const reverseString = function (stringToReverse) {
    let result = "";
    for (let i = stringToReverse.length; i >= 0; --i) {
        result += stringToReverse.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
