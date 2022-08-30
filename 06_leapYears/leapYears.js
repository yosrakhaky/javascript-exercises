const leapYears = function(year) {
    leapY=year/4
    console.log(leapY)
    console.log(year/100)

    if ((Math.round(year/100) == year/100) && (Math.round(year/400) != year/400)) {
        return false
    }
    else if (Math.round(leapY) ==leapY) {
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
