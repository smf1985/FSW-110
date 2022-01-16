let title = document.getElementById('title');
let description = document.getElementById('description');
let toDo = document.getElementById("toDo");

let form = document.getElementById('myForm');
let ul = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let parentList = document.createElement('li');
    parentList.className = 'parentList';
    let subList = document.createElement('ul');
    let nestedList1 = document.createElement('li');


    parentList.textContent = title.value;
    subList.textContent = description.value;
    nestedList1.textContent = toDo.value;




    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        let removeBtn = e.target;
        removeBtn.parentNode.parentNode.parentNode.remove();
    });

    ul.appendChild(parentList);
    parentList.appendChild(subList);
    subList.appendChild(nestedList1);
    nestedList1.appendChild(deleteBtn);

    title.value = "";
    description.value = "";
    toDo.value = "";

});