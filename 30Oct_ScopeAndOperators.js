// Part1: Scope--------------------------------------------------------------
var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c); //10 20 30


var x = 5;
var x = 10;
console.log(x); //10


let y = 5;
y = 10;
console.log(y); //10


// const z = 5;
// z = 10;
// console.log(z); //TypeError: Assignment to constant variable.


{
  var a = 1;
  let l = 2;
  const c = 3;
}
console.log(a); //1
//console.log(l); //ReferenceError: l is not defined


for (var i = 0; i < 3; i++) {}
console.log(i); //3


for (let j = 0; j < 3; j++) {}
// console.log(j); //ReferenceError: j is not defined


console.log(d); //undefined
var d = 10; 


// console.log(e);
// let e = 10; //ReferenceError: Cannot access 'e' before initialization


const person = { name: "Noor" };
person.name = "Jahan";
console.log(person.name); //Jahan

// Part2: Operators--------------------------------------------------------------

console.log(5 + "5"); //55


console.log("5" - 2);  // 3


console.log(5 == "5"); //true
console.log(5 === "5"); //false


console.log(null == undefined); //true
console.log(null === undefined); //false


console.log(true && false); //false
console.log(true || false); //true


console.log(5 > 3 ? "Yes" : "No"); //Yes


let f = null ?? "Default";
console.log(f); //Default


let g = 0 ?? 5;
console.log(g); //0


console.log(5 & 3); //1  
console.log(5 | 3); //7


let h = 5;
h += 3;
console.log(h); //8
