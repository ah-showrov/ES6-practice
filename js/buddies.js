const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => getBuddies(data));
};
loadBuddies();
const getBuddies = (buddies) => {
  const buddiesContainer = document.getElementById("container");
  const allBuddy = buddies.results;
  for (const buddy of allBuddy) {
    const p = document.createElement("p");
    p.innerText = ` Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}

    Email : ${buddy.email}`;
    buddiesContainer.appendChild(p);
  }
};
