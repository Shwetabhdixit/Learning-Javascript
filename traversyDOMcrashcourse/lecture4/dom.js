var addItems = document.querySelector('#addForm');
addItems.addEventListener('submit',function(e)
{
    e.preventDefault();
    console.log("here");
    var node = document.createElement("LI");
    var text = document.getElementById('item').value;
    node.classList.add("list-group-item");
    node.innerHTML = text+'<button class="btn btn-danger btn-sm float-right delete">X</button>';
    var addSingleItem = document.getElementById('items');
    addSingleItem.appendChild(node);
});


var deleteItems = document.getElementById('items');
deleteItems.addEventListener('click',removeItem);

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            deleteItems.removeChild(li);
        }
    }
}

var search = document.getElementById('filter');
search.addEventListener('keyup',searchItem);

function searchItem(e)
{
    var text = e.target.value.toLowerCase();
    var items  = deleteItems.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item)
    {
        console.log(item);
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}
