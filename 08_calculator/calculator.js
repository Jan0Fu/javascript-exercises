const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    result += arr[index];
  }
  return result;
};

const multiply = function(arr) {
  let result = arr[0];//or 1 but after that let index = 0
  for (let index = 1; index < arr.length; index++) {
    result *= arr[index];
  }
  return result;
};

const power = function(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
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
