const reverseString = function(string) {
    var newString = ""
    var reversedString = []
    splitString = string.split("");
    for (i=0; i<string.length; i++) {
        reversedString += splitString.pop();
    }
    newString = reversedString.toString()
    return newString
};

// Do not edit below this line
module.exports = reverseString;
