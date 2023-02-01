const fibonacci = function(num) {
    const x=parseInt(num);
    if (x<0){
        return "OOPS";
    }
    let num1=0, num2=1, fib=1;
    for (let i=1; i<x; i++){
        fib=num1+num2;
        num1=num2;
        num2=fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
