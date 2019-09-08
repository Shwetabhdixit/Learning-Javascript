// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode property

//console.log(itemList.parentNode);
//itemList.parentNode.style.background = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//parent element   ----------> parentNode and parentElement can be used interchangeably

//console.log(itemList.parentElement);
//itemList.parentElement.style.background = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

// childnodes

//console.log(itemList.childNodes); // considers line breaks as text nodes , gives a nodeList
//console.log(itemList.children); //does not consider line break as text nodes, gives an HTML collection
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

// firstChild

//console.log(itemList.firstChild); //include line breaks or texts in between element tags

//first element child
//console.log(itemList.firstElementChild); //does not include line breaks, better to use this

//itemList.firstElementChild.textContent = 'Hello';


// lastChild

//console.log(itemList.lastChild); //include line breaks or texts in between element tags

//last element child
//console.log(itemList.lastElementChild); //does not include line breaks, better to use this

//itemList.lastElementChild.textContent = 'Hello';

//next sibling

//console.log(itemList.nextSibling); //considers text and line breaks

//nextelementsibling

//console.log(itemList.nextElementSibling); //returns null if next sibling not there
//console.log(itemList.previousSibling); //considers text and line breaks

//nextelementsibling

//console.log(itemList.previousElementSibling); //returns null if next sibling not there
//itemList.previousElementSibling.style.color = 'green';

// CREATE ELEMENT


//CREATE DIV

var newDiv = document.createElement('div');

newDiv.className = 'Hello'; // add classname
newDiv.id = 'hello1'; // add id
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
//console.log(newDiv);

//inserting the created div in the header

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';
console.log(newDiv);

container.insertBefore(newDiv,h1); //(what is to be inserted, before what)


