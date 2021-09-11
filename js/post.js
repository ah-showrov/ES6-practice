 function loadAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "POST",
    body: JSON.stringify({
      title: "THIS IS NEW TITLE",
      body: "this is new body",
      userId: 101,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => getAlbum(data));
}
loadAlbums();
function getAlbum(albums) {
  const container = document.getElementById("container");
  for (const album of albums) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.innerText = `${album.title}`;
    p.innerText = `${album.body}`;
    div.appendChild(h3);
    div.appendChild(p);
    container.appendChild(div);
  }
}
 


