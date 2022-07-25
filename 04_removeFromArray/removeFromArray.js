const removeFromArray = function() {
    const args = Array.from(arguments);
    var initArray = args[0];
    console.log(initArray);
    console.log(args);
    var removeArray = [];
    var finalArray = [];
    for (i=1; i<arguments.length; i++) {
        indexToRemove = initArray.indexOf(arguments[i+1]); // find index of value inside argument to be removed from array
        removeArray.push(indexToRemove); //collect indices of values to be removed into one array
     }
    console.log(removeArray);

    for (i=0; i<removeArray.length; i++) {
        finalArray = initArray.splice(removeArray[i]);
    }
    

    console.log(finalArray);
    console.log(initArray);

};

// Do not edit below this line
module.exports = removeFromArray;
