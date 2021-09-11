// const text = "01861773437";
// const regex = /(\+88)?-?01[1-9]{9}/g;
/* const text = "royal123@gmail.com";
const regex = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/g;

const matched = text.match(regex);
const searched = text.search(regex);
const replaced = text.replace(regex, "Royal123?");
const tested = regex.test(text);
console.log(matched, searched, replaced, tested); */
function validateEmail(elementValue) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validEmail = emailPattern.test(elementValue);
  if (!validEmail) {
    validMessage(0);
  } else {
    validMessage(1);
  }
}
const validMessage = (value) => {
  const mainDiv = document.getElementById("main");
  mainDiv.textContent = "";
  if (value == false) {
    const pTag = document.createElement("p");
    pTag.innerText = "*Invalid Email";
    pTag.classList = `text-center mx-auto mt-2 text-white bg-red-500 px-4 py-1 rounded`;
    mainDiv.appendChild(pTag);
  } else {
    const mainDiv = document.getElementById("main");
    const pTag = document.createElement("p");
    pTag.innerText = "This is valid Email";
    pTag.classList = `text-center mx-auto mt-2 text-white bg-green-700 px-4 py-1 rounded`;
    mainDiv.appendChild(pTag);
  }
};
//Catch All Element
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  const email = document.getElementById("email-field");
  const emailAddress = email.value;
  if (emailAddress == "") {
    alert("Please write a email address");
  } else {
    validateEmail(emailAddress);
    email.value = "";
  }
});
