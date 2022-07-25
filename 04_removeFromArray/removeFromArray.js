const removeFromArray = function() {
    const args = Array.from(arguments);
    var initArray = args[0];
    console.log(initArray);
    console.log(args);
    var finalArray = [];
    
    initArray.forEach((item) => {
        if (!args.includes(item)) {
            finalArray.push(item);
            console.log(finalArray);
        }
    });

    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
