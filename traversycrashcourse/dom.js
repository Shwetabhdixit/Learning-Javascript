/*
### Selectors



//Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('my-form')); //works like jquery
//console.log(document.querySelector('h1'));

//multiple elements

//console.log(document.querySelectorAll('.item')); // array operations can be performed directly

//console.log(document.getElementsByClassName('item')); //array operations cannot be performed directly
 
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove(); 

//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';

ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>hello</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

###events


const btn = document.querySelector('.btn');
btn. addEventListener('click',(e)=>{
    e.preventDefault(); // prevents the form from submitting to file which is the default behaviour of the submit button
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1'
});

###form script
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value == '' || emailInput.value =='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
        setTimeout(() => msg.remove(),3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
