/*
var button = document.getElementById('button');


// 3 methdds to define a callback function
button.addEventListener('click',()=>{
    console.log('123');
})

button.addEventListener('click',function()
{
    console.log('abc');
});

button.addEventListener('click',buttonClick);

function buttonClick(e)
{
    console.log('Button Clicked');
    console.log(e); // give info about all the properties of the element
    console.log(e.target); //gives actual element that was clicked or like a keydown on an input, it would give us the input
    //meaning wahtever element the event is fired from
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList); // given a DOMTokenList dispalying all the classes of the particular element
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    console.log(e.type); //type of event
    console.log(e.clientX); // position on X axis, position from browser window
    console.log(e.clientY); // position on Y axis, position from browser window
    console.log(e.offsetX); // position from the actual element
    console.log(e.offsetY); // position from the actual element
    console.log(e.altKey);  // tells if this key is pressed or not
    console.log(e.shiftKey);
    console.log(e.ctrlKey);
}


document.getElementById('header-title').textContent = 'Changed';



var button = document.getElementById('button');
var box = document.getElementById('box');
//button.addEventListener('dblclick',runEvent);
button.addEventListener('mouseup',runEvent);
//button.addEventListener('mousedown',runEvent);


box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);
box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent);

//mouseenter is only for the element, whereas mouseover is for all the child elements too,
// same thing with mouseleave and mouseout

var output = document.getElementById('output');
var button = document.getElementById('button');
var box = document.getElementById('box');
box.addEventListener('mousemove',runEvent);
function runEvent(e)
{
    console.log('EVENT TYPE:' + e.type);
    //output.innerHTML = '<h3>MouseX: '+e.offsetX+ ' </h3><h3>MouseY: '+e.offsetY+'</h3>';
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}





### keyboard and input events
*/

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('keypress',runEvent);
//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);

//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);

//itemInput.addEventListener('input',runEvent);

//var select = document.querySelector('select');
//select.addEventListener('change',runEvent);
 form.addEventListener('submit',runEvent);

function runEvent(e)
{
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);
    //console.log(e.target.value);
    
    //document.body.style.display = 'none';
    //document.getElementById('output').innerHTML= '<h3>'+e.target.value+'</h3>';
    
}