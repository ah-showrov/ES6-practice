const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => getQuote(data));
};

const getQuote = (quote) => {
  const showCase = document.getElementById("quote");
  showCase.innerText = quote.quote;
};
