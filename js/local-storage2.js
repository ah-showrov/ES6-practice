//onclick function
const addProduct = () => {
  const inputField = document.getElementById("name-field");
  const inputText = inputField.value.toLowerCase();
  // input value error handling
  if (!inputText || inputText <= 0) {
    inputField.value = "";
    return;
  }
  // Display Products
  displayProducts(inputText);
  //Add cart to LocalStorage
  addCart(inputText);
  //cleat input field
  inputField.value = "";
};

//Display products to UI
const displayProducts = (name) => {
  const ul = document.getElementById("list-container");
  const li = document.createElement("li");
  li.innerText = name;
  ul.appendChild(li);
};
// Check and get Cart From LocalStorage
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};
// Add cart to LocalStorage
const addCart = (name) => {
  const cart = getCart(name);
  if (cart[name]) {
    cart[name] += 1;
  } else {
    cart[name] = 1;
  }
  const stringified = JSON.stringify(cart);
  localStorage.setItem("cart", stringified);
};

const displayLocalStorageCart = () => {
  const cart = getCart();
  for (const name in cart) {
    displayProducts(name);
  }
};
//place Order and remove product from local storage and UI
const placeOrder = () => {
  document.getElementById("list-container").textContent = "";
  localStorage.removeItem("cart");
};
displayLocalStorageCart();
