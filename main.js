/*
console.log("hello world");


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

const nums = new Array(1,2,3,4,5); // new means a constructor.
const fruits = ['apples','oranges','pears',1,true]; //heterogenous arrays
console.log(fruits[3]) // outputs 1
fruits[3] = 'grapes';
console.log(fruits);

fruits.push('mangoes'); //add at last
fruits.unshift('strwaberries'); //add at first
fruits. pop(); //remove last value


console.log(Array.isArray(fruits)); // check if something is an array
console.log(fruits.indexOf('oranges'));
console.log(fruits);

### Object literals


const person = 
{
    firstName: 'John',
    lastName: 'Doe',
    age : 30,
    hobbies : ['music','movies','sports'],
    address :{
        street: '50 main st',
        city: 'Boston',
        state : 'MA'
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.street);

const {firstName,lastName,address: {city}} = person; //pulling these values from the person object
console.log(firstName);
console.log(city);
person.email = 'john@gmail.com'; // adding properties to the person obejct
const todos = [
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'dentist appointment',
        isCompleted: false
    }   
];

console.log(todos[1].text);

 //converting to JSON
 const todoJSON = JSON.stringify(todos);
 console.log(todoJSON);

###loops

##for loop


for(let i=0;i<10;i++)
{
    console.log(`For loop Number: ${i}`);
}

##while loop

let i=0;
while(i<10)
{
    console.log(`while loop number:${i}`);
    i++;
}
for(let i=0;i<todos.length;i++)
{
    console.log((todos[i].text));
}

for(let todo of todos)
{
    console.log(todo.text);
}

##for each loop

todos.forEach(function(todo)
{
    console.log(todo.text);
});

## map
const todoText = todos.map(function(todo) // map returns an array
{
    return todo.text;
});
console.log(todoText);

##filter
*/
const todos = [
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'dentist appointment',
        isCompleted: false
    }   
];

const todoCompleted = todos.filter(function(todo) //filter an array accroding to a particular condition
{
    return todo.isCompleted === true;
});
console.log(todoCompleted);



