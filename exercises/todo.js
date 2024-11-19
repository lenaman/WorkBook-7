
let idInput = document.querySelector("#idInput")
async function getToDo(){
    let promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let response = await promise
    let data = await response.json();
    console.log(todo);
    }

function showDetails(){
    console.log(idInput.value);
    getToDo()
}