const posts = [
    {
        title:'Post One',
        body:'this is post one'
    },
    {
        title:'Post two',
        body:'this is post two'
    }
    ];
    
function getPosts()
{
    setTimeout(()=>
    {
        let output = '';
        posts.forEach((post,index)=>
        {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output; 
    },1000);
    }

function createPost(post) 
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            posts.push(post);
            const error =false;
            if(!error)
            {
                resolve(); // calls get posts once it resolves
            }
            else{
                reject('error : Something went wrong');
            }
        },2000);
    });
    
}

// createPost({title:'Post three',
// body:'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));


/// ASYNC / AWAIT --> more elegant way to handle promises

// async function init()
// {
//     await createPost({title:'Post three',body:'This is post three'});
//     getPosts();
// }

// init();

/// ASYNC / AWAIT WITH FETCH
async function fetchUsers()
{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();







///PROMISE.ALL

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=> setTimeout(resolve,2000,'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); //fetchAPI returns a promise
// //we need to do two .then --- one to convert to json and second to get the users

// Promise.all([promise1,promise2,promise3,promise4])
// .then(values => console.log(values)); // it takes how long the longest promise is
