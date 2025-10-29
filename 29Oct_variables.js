//Create variables using var, let, and const
var name = "Anwar";
let age = 22;
const city = "Hyderabad";

//reassign values
name = "Ravi";      // Works fine
age = 25;           // Works fine
// city = "Delhi";  // Error: Assignment to constant variable


//Creating a block and declare let & var
{
  let puppy = "Chimtu";
  var men = "Anvesh";
  console.log(puppy, men);
}

// Accessing outside the block
// console.log(men); // Error: blockLet is not defined
console.log(puppy);   // Works fine (var is function/global scoped)


// 4️⃣ Declare a variable inside a function using var
function test() {
  var x = "function runs";
  console.log(x);
}
test();

// console.log(x); //Error: x is not defined (var inside function is not accessible outside)
