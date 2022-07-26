const sumAll = function(firstNum, lastNum) {
    var sum = 0
    if (Number.isInteger(firstNum) && Number.isInteger(lastNum) && firstNum>=0 && lastNum >=0) {
        if (firstNum <= lastNum) {
            var min = firstNum;
            var max = lastNum;
        }
        else if (lastNum<firstNum){
            var min = lastNum;
            var max = firstNum;
        }
        for (i=min-1; i<max+1; i++) {
            sum += i
        }
    return sum
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
