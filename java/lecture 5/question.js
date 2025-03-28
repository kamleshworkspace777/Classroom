// Create a function using the "Function" keyword that takes a string as an arguement & returns the number of vowels in the string
function countVowels(str) {
  for (const char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log("in the string number of vowels are");
  console.log(count);
}
const countVow = (str) => {
  const vow = "aeiouAEIOU";
  return [...str].filter((char) => vow.includes(char)).length;
};

// Example usage:
console.log(countVow("Hello World")); // Output: 3
console.log(countVow("JavaScript")); // Output: 3
// practice question 2
// for a given ,array of numbers, print the square of each value using the foreach loop.
let number = [5, 56, 45, 22, 11];
number.forEach((num, index) => {
  console.log(num * num, index);
});
// another methode of writing callback
let numb = [55, 41, 23, 11];
let calcsquare = (nums) => {
  console.log(nums * nums);
};
numb.forEach(calcsquare);
