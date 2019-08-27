console.log("hello world");

/*
### declaring variables

let - variable value
const - constant
var - global,causes scope problems, not advised to use


### data types

string
numbers
boolean
null
undefined

#examples

const name = 'John'; //outputs string when console.log(typeof name)
const age = 30;      // outputs number .. 
const rating =4.5;    // outputs number ..
const isCool = true;   // outputs boolean ..
const x =null;     // outputs oject ..
const y = undefined;
let z; // same as const y (undefined)

console.log(typeof x); // returns object but that's a bogus value. Google it.


##strings

#concatentation
console.log('My name is' + name+ 'and I am '+age);

#template string
console.log(`My name is ${name} and I am ${age}`); 

## string functions

const s = 'Hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(','));

### arrays

*/
const nums = new Array(1,2,3,4,5); // new means a constructor.
const fruits = ['apples','oranges','pears',1,true]; //heterogenous arrays
console.log(fruits[3]) // outputs 1
fruits[3] = 'grapes';
console.log(fruits); // outputs

