const submit = document.getElementById("btn");
const clear = document.getElementById("clear");
let input = document.getElementById("add-item");
let ul = document.querySelector("ul");


function inputLength() {
  return input.value.length;
}

function createListElement(){
  let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.classList.add('todo-item');
    input.value = ""; 
    let button = document.createElement("button");
    button.classList.add('btn');
    button.classList.add('del');
    button.innerHTML = "Done!";
    li.appendChild(button);
}

function addItem(){
  if(inputLength() > 0){
    createListElement();
  }
}

function clearList(){
  let list = document.querySelectorAll('li');
  list.forEach(function(item){
     item.remove(item);
  })
}

function enterPress(event){
  if(inputLength() > 0 && event.code == "Enter"){
    createListElement();
  }
}


// Line through item if clicked or Item and button removed via Done Button
function itemDone(event){
  todoItem = event.target;
 if (todoItem.classList.contains('todo-item')){
  todoItem.classList.toggle('done');
 } 
  else if (todoItem.classList.contains('del')){
    todoItem.parentNode.remove(todoItem);
  }
}



// Event Listeners
ul.addEventListener('click', itemDone);
input.addEventListener("keypress", enterPress);
submit.addEventListener('click', addItem);
clear.addEventListener('click', clearList);
