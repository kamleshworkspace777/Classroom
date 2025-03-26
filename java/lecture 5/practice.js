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
function sum(x,y) {
    s=x+y;
    console.log("before return");
    return s;
    console.log("after the retirn");  
}
let val = sum(3,8);
console.log(val); 
//Arrow Functions
//sum Functions
function sum(a, b) {
    return a+b;
}
//multification
function mul(a,b) {
    return a*b;
}
const arrowmul = (a, b) =>{
    console.log(a*b);
}
//compact way of writing function(arraow fnctions )
function sum1(a,b) {
    return a+b;
}
const arrowsum = (a, b) =>{
    console.log(a+b);
}
//arow functions are modern functions