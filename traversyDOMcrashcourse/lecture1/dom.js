// DOM or Document Object Model is a tree of nodes/elements
// created by the browser. JS can be used in DOM manipulation
/*
//EXAMINE THE DOCUMENT OBJECT
console.dir(document); // displays properties and methods related to the document

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title =123; // we can set the title

console.log(document.doctype);
console.log(document.body);
console.log(document.head);
console.log(document.all);


console.log(document.all[10]);
//document.all[10].textContent = 'Hello';  //not a good way of selecting since indx may change
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//GET ELEMENT BY ID



//console.log(document.getElementById('header-title'));
 //var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
 //console.log(headerTitle);
 //headerTitle.textContent = 'Hello';
 //headerTitle.innerText = 'Goodbye'; //innerText considers the styling whereas textContent does not
 //headerTitle.innerHTML = '<h3>Hello</h3>'; // h3 goes inside h1

//  header.style.borderBottom = 'solid 30px #000 ';

GET ELEMENTS BY CLASS NAME



var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4'; // does not work since items is an HTMLCollection
var arr = Array.from(items);
arr.forEach(element =>
     {
    element.style.backgroundColor = '#f4f4f4';
});

GET ELEMENTS BY TAG NAME


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.backgroundColor = 'yellow';

var arr = Array.from(li);
arr.forEach(e =>{
    console.log(e);
});

QUERY SELECTOR



var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 3px #000';

var input = document.querySelector('input');
input.value = 'hello world';

var submit = document.querySelector('input[type ="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nthchild(2)');
secondItem.style.color = 'coral';


// QUERY SELECTOR ALL //
*/
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'hello';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

 
 