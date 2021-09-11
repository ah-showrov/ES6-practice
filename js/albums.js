const loadAlbums = () => {
  fetch("https://jsonplaceholder.typicode.com/albums", {
    method: "POST",
    body: JSON.stringify({
      title: "it's a title",
      body: "this is nothing ",
      userId: 4,
    }),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => getAlbum(data));
};

const getAlbum = (albums) => {
  const section = document.getElementById("container");
  for (const album of albums) {
    const div = document.createElement("div");
    div.innerText = `Title :  ${album.title}`;
    section.appendChild(div);
  }
};
