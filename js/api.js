// First Try
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function addUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => addNewLi(users));
}
function addNewLi(users) {
  for (const user of users) {
    const ul = document.getElementById("users-box");
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name}.    Email: ${user.email}`;
    ul.appendChild(li);
  }
}
