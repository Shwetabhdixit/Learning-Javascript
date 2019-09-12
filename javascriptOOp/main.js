// object.properties
// object.method()
/*
const s1 = 'Hello';
const s2 = new String('Hello');

console.log(typeof s1); //string
console.log(typeof s2); //object

console.log(window) //highest object present in the DOM
//so we dont really need to do window.alert() but can also do alert(1);

console.log(navigator.appVersion);


//OBJECT LITERAL


const book1 = 
{
    title:'Book one',
    author:'john Doe',
    year: '2013',
    getSummary:function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.title);
console.log(book1.getSummary());
console.log(Object.values(book1)); //gives an array of each property value of an object literal
console.log(Object.keys(book1)); // gives the keys


///CONSTRUCTOR 9j

function Book(title,author,year)
{
    this.title = title;
    this.author = author;
    this.year = year;
    //we should move the function to prototypes
    /*this.getSummary =function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }s
}
//getSummary
Book.prototype.getSummary = function()
{
    return `${this.title} was written by ${this.author} in ${this.year}`;

}

//getAge
Book.prototype.getAge = function()
{
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Revise / change year
Book.prototype.revise = function(newYear)
{
    this.year = newYear;
    this.revised = true; // gets added as a property of the book  only for the object instance where the function is called.
};

//instantiate an object

const book1 = new Book('Book One','John Doe','1999');
const book2 =  new Book('Book Two','Jane DOe','2009');
console.log(book1);
console.log(book1.getAge());
console.log(book1.revise());
 

//INHERITANCE

//magazine constructor

function Magazine(title,author,year,month)
{
    Book.call(this,title,author,year); // this signifies the magazine itself
    this.month = month;
}

//inherit prototypes
Magazine.prototype = Object.create(Book.prototype);


//use a magazine constructor

Magazine.prototype.constructor = Magazine;


//Instantiate a magazine object

const mag1 = new Magazine('Mag One','John Doe','2018','Jan');
console.log(mag1);
console.log(mag1.getSummary());

// Object of Protos
const bookProtos = 
{
    getSummary : function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge : function()
    {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//create object

const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';
console.log(book1);

//another method 

const book2 = Object.create(bookProtos,{
title : {value: 'Book One'},
author : {value:'John Doe'},
year : {value : '2013'}
});
console.log(book2);
*/

/// ES-6 classes

class Book{
    constructor(title,author,year)
    {
        this.title = title;
        this.author = author;
        this.year =year;
    }

    getSummary()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

  /*  getAge()
    {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear)
    {
        this.year = newYear;
        this.revised =true;
    }

    static topBookStore()
    {
        return 'Barnes and Noble';
    }
}
//instantiate object

const book1  = new Book('Book One','John Doe','2013');

console.log(book1);
book1.revise('2018');
console.log(book1);

console.log(Book.topBookStore());
*/
}
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month=month;
    }
}

//Instantiate a magazine object
const mag1  = new Magazine('Mag one','John Doe','2018','jan');
console.log(mag1);
console.log(mag1.getSummary());
