const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(list) {
  const result = list.reduce((total, a)=>total+a,0)
  return result;
};

const multiply = function(list) {
  const result = list.reduce((total, a)=>total*a,1)
  return result;
};

const power = function(a,b) {
return Math.pow(a,b);
};

const factorial = function(a) {
  let result =1;
  for (let i=1; i<=a; i++){
    result *=i;
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
