//Function
function myFunction() {
  console.log("functions");
}
myFunction();
// arthematic example
let x = myfunction(4, 3); // Calls myfunction with arguments 4 and 3
function myfunction(a, c) {
  return a + c; // Returns the sum of a and c
}
console.log(x);
// example 2( parameters- like local variables of functions and block scope)
function sum(x, y) {
  s = x + y;
  console.log("before return");
  return s;
  console.log("after the retirn");
}
let val = sum(3, 8);
console.log(val);
//Arrow Functions
//sum Functions
function sum(a, b) {
  return a + b;
}
//multification
function mul(a, b) {
  return a * b;
}
const arrowmul = (a, b) => {
  console.log(a * b);
};
//compact way of writing function(arraow fnctions )
function sum1(a, b) {
  return a + b;
}
const arrowsum = (a, b) => {
  console.log(a + b);
};
//arow functions are modern functions
const printHello = () => {
  console.log("Hello");
};
// foreach
let arr = ["Hyderabad", "pune", "Delhi", "Mumbai"];
arr.forEach(function printVal(val) {
  // here val is value at each index
  console.log(val);
});
// using arrow function
let furniture = ["chair", "sofa", "bed", "table"];
furniture.forEach((furn, index) => {
  console.log(furn.toUpperCase(), index);
});
//for each is a higher order function/method and higher order function are the function which use other function as a parameter or return any function as a value.
//MAP array methode
// it is very similar to foreach methode but the difference is it creates a new array.
let nums = [67, 56, 44, 22, 65];
nums.map((val) => {
  // for printing the array values using map array function
  console.log(val);
});

let num = [67, 56, 44, 22, 65];
let newArr = num.map((value) => {
  return value;
});
console.log(newArr);
//filter methode

export function func1() {
  let a = 10,
    b = 20;
  let c = a + b;
  return c;
}

console.log("sum", func1());
