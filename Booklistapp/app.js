//Book class : Represents a book
class Book{
    constructor(title,author,isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class : handle Ui tasks
class UI{
    static displayBooks()
    {
        const books = Store.getBooks();

        books.forEach((book)=>UI.addBookToList(book));
    }

    static addBookToList(book){
        const li = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class ="btn btn-danger btn-sm delete">X</td>`;
            li.appendChild(row);
    }

    static clearFields()
    {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showAlerts(message, className)
    {
        const div = document.createElement('div');
        div.className= `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form); //format -> parentElement.insertBefore(element to be inserted, element before which it has to be added)
        setTimeout(()=>document.querySelector('.alert').remove(),3000);

    }

    static deleteBook(el)
    {
        if(el.target.classList.contains('delete'))
        {
            if(confirm('Are you Sure?'))
            {
                booklist.removeChild(el.target.parentElement.parentElement);
                //you can also use el.parentElement.parentElement.remove();
                
            }
        }
    }
}
//Store class : Handles storage, on browser, does not go away when the window is closed,
//              stays till its cleared.


class Store{
    static getBooks()
    {
        let books;
        if(localStorage.getItem('books') === null)
        {
            books=[];
        }
        else{
            books = JSON.parse(localStorage.getItem('books')); //this is stored as a string so we use JSON.parse
        }
        return books;
    }

    static addBook(book)
    {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books)); //stored as string but is an array of objects so we make use of JSON.stringify

    }
    static removeBook(isbn)
    {
        const books = Store.getBooks();
        books.forEach((book,index)=>
        {
            if(book.isbn ==isbn)
            {
                books.splice(index,1); //remove 1 item at position indicated by index
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}

//Event : Display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);



//Event : Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>
{
    //prevent actual submit
    e.preventDefault();
    //get form values
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //validate
    if(title === '' || author === '' || isbn === '')
    {
        UI.showAlerts('Please fill in all the fields','danger');
    }
    else
    {
         // instantiate a book
        var book1 = new Book(title,author,isbn);

        //Add book to UI 
        UI.addBookToList(book1);

        //Add book to store
        Store.addBook(book1);

         //show success alert
        UI.showAlerts('Book addded','success');

        //clear the fields
        UI.clearFields();

       
    }
   
});


//Event : remove a book
var booklist = document.querySelector('#book-list');
console.log(booklist);
booklist.addEventListener('click',(e)=>
{
    //Remove book from UI
   UI.deleteBook(e);

   //Remove book from the store
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

   UI.showAlerts('Book Removed','success');
});
