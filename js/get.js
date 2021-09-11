function addPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((user) => addUsers(user));
}
addPost();
function addUsers(users) {
  for (const user of users) {
    const Container = document.getElementById("container");

    const div = document.createElement("div");
    div.innerHTML = `
       <h3> ${user.title}</h3>
       <p> ${user.body}</p>`;
    Container.appendChild(div);
  }
}
