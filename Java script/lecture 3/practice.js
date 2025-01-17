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
//stringsf