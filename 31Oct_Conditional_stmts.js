//Part 1: Functional Scope vs Block Scope
function test() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); //20
  }
  console.log(x); //20
}
test();


function example() {
  let y = 5;
  if (true) {
    let y = 10;
    console.log(y); //10
  }
  console.log(y); //5
}
example();


function run() {
  if (true) {
    var a = 100;
    let b = 200;
    const c = 300;
  }
  console.log(a); //100
  console.log(typeof b); //undefined
}
run();


var a = 1;
function outer() {
  console.log(a); //undefined
  var a = 2;
}
outer();


let x = 10;
{
  let x = 20;
  {
    let x = 30;
    console.log(x); //30
  }
  console.log(x); //20
}
console.log(x); //10


{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); //1
console.log(typeof b); //undefined
// console.log(typeof c); //ReferenceError: Cannot access 'c' before initialization


for (var i = 0; i < 3; i++) {}
console.log(i); //3

for (let j = 0; j < 3; j++) {}
console.log(typeof j); //undefined


function demo() {
  console.log(a); //undefined
  var a = 50;
  console.log(a); //50
}
demo();


function blockTest() {
  const value = 5;
  if (true) {
    const value = 10;
    console.log(value); //10
  }
  console.log(value); //5
}
blockTest();


function testScope() {
  if (true) {
    var x = "var inside";
    let y = "let inside";
  }
  console.log(x); //var inside
//   console.log(typeof y); //Cannot access 'y' before initialization
}
testScope();


// Part 2: if, else if, and switch case
function grading(){
    let marks = 65;
    if (marks > 80){
        console.log('Grade A')
    }
    else if (marks > 60){
        console.log('Grade B')
    }
    else if (marks > 40){
        console.log('Grade C')
    }
    else{
        console.log('Fail')
    }
}
grading();


//Switch case: Print day name (1–7)
let dayNumber = 3; // Try changing the number (1–7)
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}
console.log("Day:", dayName); //Day: Tuesday


//Simple Calculator using switch case
let num1 = 10;
let num2 = 5;
let operator = "mul";
let result;
switch (operator) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operator";
}
console.log("Result:", result); //50


//Age group using if...else if
let age = 45; 
if (age < 13) {
  console.log("Age Group: Child");
} else if (age >= 13 && age <= 19) {
  console.log("Age Group: Teen");
} else if (age >= 20 && age <= 59) {
  console.log("Age Group: Adult");
} else {
  console.log("Age Group: Senior");
}


//Switch for traffic light colors
let color = "yellow";
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}


//Part 3: if...else if, switch case, falsy values & nullish coalescing
let m = 0;
if (m) console.log("Truthy");
else console.log("Falsy"); //falsy


let value = null ?? "default";
console.log(value); //default


let c;
let y = c ?? 10;
console.log(y); //10


let name = "";
console.log(name || "Guest"); //Guest
console.log(name ?? "Guest");


let n = NaN;
if (n) console.log("True");
else console.log("False"); //False


let choice = 2;
switch (choice) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two"); //Two
  case 3:
    console.log("Three"); //Three
    break;
  default:
    console.log("Other");
}


let userInput = undefined;
let res = userInput ?? "No Value";
console.log(res); //No Value


let num = "5";
if (num == 5) console.log("== works"); //==works
if (num === 5) console.log("=== works");


let test1 = 0 || "fallback";
let check = 0 ?? "fallback";
console.log(test1, check); //fallback 0


let score = null;
if (score ?? 0 > 50) console.log("Passed");
else console.log("Failed"); //Failed
