const addProduct = () => {
  const nameField = document.getElementById("name-field");
  const nameText = nameField.value;
  if (!nameText || nameText < 0) {
    nameField.value = "";

    return;
  }

  // display product in UI
  displayProduct(nameText);
  //add cart to local Storage
  addCart(nameText);
  nameField.value = "";
};

//display product function
const displayProduct = (name) => {
  const ul = document.getElementById("list-container");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};

const getCard = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};
const addCart = (name) => {
  const cart = getCard();
  if (cart[name]) {
    cart[name] = cart[name] + 1;
  } else {
    cart[name] = 1;
  }
  const stringified = JSON.stringify(cart);
  localStorage.setItem("cart", stringified);
};

const displayLocalStorageCart = () => {
  const cart = getCard();
  for (const name in cart) {
    displayProduct(name);
  }
};
const placeOrder = () => {
  document.getElementById("list-container").textContent = "";
  localStorage.removeItem("cart");
};
displayLocalStorageCart();
