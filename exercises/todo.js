
let idInput = document.querySelector("#idInput")
async function getToDo(){
    let promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
    let response = await promise
    let data = await response.json();
    console.log(todo);
    }
    getToDo();

function showDetails(){
    console.log("Hello, how are you?")
}