for (let index = 1; index <=8; index++){
    console.log("kamal");
}
//to calculate sum of 1 to 5
let sum = 0;
for (let i=1; i <= 5; i++) {
    sum = sum + i;
    console.log("sum=",sum);
}
console.log("sum=",sum);
console.log("lopp has ended");
//while loop
let i = 1;
while (i<=10) { 
    console.log("i=",i);
    i++;
}
//fo-while loop
let l=20;
do {
    console.log("l=",l)
    l++
}
while (l<=10);
console.log("loop ended")
//for-of-loop
let str = "kamlesh";
let size = 0;
for (let val of str){
    console.log("val=",val)
    size++;
}
console.log("size = ",size);
console.log("loop-ended here")
//for-in-loop
let student = {
    name: "Avinash",
    age: 20,
    cgpa: 7.5,
    ispass: true,
};
for (let kye in student){
    console.log("kye=",kye, "=",student[kye]);
    console.log("ended-loop here")
}//practice quetion 1
for (let x=1; x <=100;x++) 
    console.log(x)
// practice quetion 2
for (let x=1; x<=100; x++)
    if (x%2 == 0){
        console.log(x)
        size++;
    }
    console.log("size=",size)
    console.log("loop ended up here")
// practice question 3
let gamenum = 25;
let username = prompt("Guess the game number: ");

while (username !=gamenum) {
    username = prompt("you entered wrong game number");
}
console.log("congratulation, you entered the right number");
console.log("loop ended up here");
//strings
let str2 = "classroom";
let str3 = 'room';
console.log(str2[3]);
//Template literal
let specialstring=`this is template string`;
console.log(specialstring);
let object = {
    item: "pen",
    price: "25",
};
//example of tempalte literal
let output = `The price of ${object.item} is ${object.price} rupees`;
console.log(output);
//Normal way to print the output
console.log("The price of",object.item,"is",object.price,"rupees");
//strings method
let str4 = "kamleshargmala";
str4 = str4.toUpperCase();
console.log(str4);
let str5 = "kamal";
let newstr = str5.toUpperCase();
console.log(str5);
console.log(newstr);
