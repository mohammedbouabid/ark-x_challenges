/* The basics */

// Task 1
let firstname = "mohammed";
let lastname = "bouabid";
const PI = 3.14;
let radius = 5;
let favoriteSuperhero = "Superman";
let favoriteQuote = "With great power comes great responsibility.";

// Task 2
let fullName = firstname + " " + lastname;
let areaOfCircle = PI * (radius ** 2);

let motivation = "a wise man named " + favoriteSuperhero + " once said: " + favoriteQuote;

// Task 3
let a = 3;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("After swapping: a = ", a, " and b = ", b);


/* Conditions Statements */

//task 1

a % 2 !== 0 ? console.log("odd number!") : console.log("even number!");

//task 2

var day = 4;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Unvalid Day");
}

//task 3

let d = -15;
let e = 6;
let f = 2.6;

let max = d;
if (d < e){
    max = e;
    if (e < f){
        max = f;
    }
}

console.log(max);

// Task 4
let score = 83;
let grade = "";

if(score > 85){
    grade = "A";
}else if(score <= 85 && score > 70){
    grade = "B";
}else if(score <= 70 && score > 55){
    grade = "C";
}else if(score <= 55 && score > 40){
    grade = "D";
}else if(score <= 40 && score > 15){
    grade = "E";
}else {
    grade = "F";
}

console.log(grade);

const x = 10;
if (true) {
  const x = 20;
  console.log(x);
}
console.log(x);


switch (true) {
    case score > 85:
        grade = "A";
        break;
    case score <= 85 && score > 70:
        grade = "B";
        break;
    case score <= 70 && score > 55:
        grade = "C";
        break;
    case score <= 55 && score > 40:
        grade = "D";
        break;
    case score <= 40 && score > 15:
        grade = "E";
        break;
    default:
        grade = "F";
}

console.log(grade);


