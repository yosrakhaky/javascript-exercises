const add = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(arr) {
	var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  product = 1
  for (var i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
};

const power = function(num1, num2) {
	var pow = 1;
  for (var i=0; i<num2; i++) {
    pow = pow*num1
  }
  return pow;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
