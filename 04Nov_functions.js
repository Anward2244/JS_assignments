// 1. Function Definition & Function Expression
console.log(a());  //Function Declaration
console.log(b); //undefined

function a() {
  return "Function Declaration";
};

var b = function() {
  return "Function Expression";
};


// 2. Anonymous Function (inside expression)
let greet = function() {
  return "Hello!";
};
console.log(typeof greet); // function
console.log(greet.name); // greet


// 3. IIFE (Immediately Invoked Function Expression)
let result = (function(x, y) {
  return x * y;
})(3, 4);

console.log(result); // 12


// 4. Arrow Function and this
let user = {
  name: "Noor",
  say: () => {
    console.log(this.name); //
  },
};
user.say();


// 5. Generator Function
function* counter() {
  yield 1;
  yield 2;
  return 3;
}

let gen = counter();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); //{value: 2, done: false}
console.log(gen.next()); //{value: 3, done: true}


// 6. First-Class Function
function greet1(name) {
  return "Hello " + name;
}

function execute(fn, value) {
  return fn(value);
}

console.log(execute(greet1, "Students")); // Hello Students


// 7. Pure Function
let count = 0;
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));   // 7
console.log(count);       // 0


// 8. Default Parameters
function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(3));     // 15
console.log(multiply(3, 2));  // 6


// 9. Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));     //24


// 10. Callback & Higher-Order Function
function printResult(fn, num) {
  console.log(fn(num));         // 20
}

function double(n) {
  return n * 2;
}

printResult(double, 10);  



