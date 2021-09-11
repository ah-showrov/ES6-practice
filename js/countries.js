const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => getCountries(data));
};

loadCountries();
const getCountries = (countries) => {
  const getCountry = countries.forEach((country) => {
    const wrapper = document.getElementById("countriesDiv");
    const div = document.createElement("div");
    div.classList.add("styles");
    div.innerHTML = `
    <h2>Name : <span class=" text-color"> ${country.name}</span></h2>
     <h3> Capital:<span class=" text-color"> ${country.capital}</span></h3>
     <button onclick="loadCountryByName('${country.name}')">More Details</button>
     `;

    wrapper.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};
const displayCountryDetails = (country) => {
  const DetailsContainer = document.getElementById("details-Wrapper");

  DetailsContainer.innerHTML = `
                            <h3> <span class=" propertyStyle"> Country :</span> ${country.name}</h3>
                            <h3> <span class=" propertyStyle"> Capital :</span> ${country.capital}</h3>
                            <h3> <span class=" propertyStyle"> Population :</span> ${country.population}</h3>
                            <h3> <span class=" propertyStyle"> Area:</span> ${country.area}</h3>
                            <h3> <span class=" propertyStyle"> Time Zones:</span> ${country.timezones}</h3>
                            <h3> <span class=" propertyStyle"> Borders:</span> ${country.borders}</h3>

                            <img src="${country.flag}"/>`;
};
