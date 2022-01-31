console.log('hello world');

// Udemy test files

// Types

// Number
let n: number = 17;
n = 0x11; // Hex
n = 0b10001; // Binary
n = 0o21; // Octal
// Boolean
let b: boolean = true;
b = false;
b = !!(n); // n == 0 ? false : true
b = !!(null); // false

// String
let s: string = 'Hello buddy';
s = "Hello buddy";
s = `My number is ${n}`; // My number is 17

// undefined and null
n = undefined;
s = undefined;
b = undefined;
n = null;
s = null; 
b = null;
// Two ways to define nothing. However, null is 0 but undefined is not a number (NAN).

// any
let a: any;
a = 2;
a = 'string';
a = false;

// void - when you not want it to return anything... Apparently
let v: void;
v = undefined;
v = null;

// array
let nArray: number[] = [1, 2, 3];
let sArray: Array<string> = ["Hi", "Hello", "Hey"];
// Avoid using any, it defeats the purpose of TypeScript.
let aArray: any[] = [1, "2"];

// tuple - When you know the exact elements of the array.
let t: [string, number, number] = ['Michael Jackson', 50, 500000];
t[1]= 51;

// enum - We can give names to numeric values
enum Color {Red, Green, Blue};
let e: Color = Color.Green;
e = 0;
n = Color.Red;

// object
let o: object = {
  name: "Obama"
}

// We are defining one object with the property of name.
let o2: { name: string } = {
  name: "Obama"
};


// Union Types
let something: (Array<any> | string); // If you assign a number, it'll end in an error.
something = [1, 2, 3];
something = "one thing";

// typeof method - Checks typeof Variable (good conditional indicator)
let theLength = something.length

//.substring needs further research.
if (typeof something === "string") {
  something.substring(1, 3);
}

// Type casting - further research
(something as string).substring(1, 3);
(<string>something.substring(1,3));

// Functions
// If I was to change :number to :string, it would return an error
let f1 = function(x: number, y: number): number {
  return x + y;
}

let f3 = function(x: (number | string), y: (number | string)): string {
  return x.toString() + y.toString();
}
