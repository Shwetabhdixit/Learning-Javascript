//asynchronus means a no wait handling of events
// CALLBACKS , PROMISES AND ASYNC AWAIT
// CALLBACKS THEN PROMISES AND THEN AWAIT( still dealing with promises but in a more elegant way)

///CALLBACKS

//we are mimicking what it would be like to fetch from a server, which can take a couple of seconds
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


/*
function createPost(post)
{
    setTimeout(()=>{
        posts.push(post);
    },2000);
}

createPost({title:'Post three',body:'This is post three'})
getPosts();

// we see only post one and post two if the 
// timeout of getposts() is lesser than createpost() since it executes before 
//createpost() has finished implementing its functionality but if we increase the time of 
//get posts() we get all the three posts

// the solution to this is adding a callback function  to createpost() and 
//running that right after a post is pushed , in this case the callback function has to be getposts()
//this means that the function createpost() runs the function getposts() right after it has pushed something
//and not waiting 2 sec after pushing a post


function createPost(post,callback) //it can have any name , it just denotes a callback function
{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

createPost({title:'Post three',body:'This is post three'},getPosts); //now it waits for 2 seconds and then shows all the 3 posts as specified in the functionality

*/


