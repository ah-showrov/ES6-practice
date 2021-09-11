const searchFood = async () => {
  const inputField = document.getElementById("foodInput");
  const inputText = inputField.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayFood(data.meals);
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => displayFood(data.meals));
  inputField.value = "";
};

const displayFood = (meals) => {
  const container = document.getElementById("card-container");
  container.textContent = "";
  /*   if (container.innerHTML == 0) {
    console.log("sorry");
  } else { */
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div onclick="loadFoodDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Meal : ${meal.strMeal}</h5>
          <p class="card-text">Meal Origin : ${meal.strArea}</p>
        </div>
      </div>
      `;
    container.appendChild(div);
  });
  // }
};

const loadFoodDetails = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  getFoodDetails(data.meals[0]);
};
/* const loadFoodDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getFoodDetails(data.meals[0]));
}; */
const getFoodDetails = (details) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.textContent = "";
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
              <img src="${details.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${details.strMeal}</h5>
                  <p class="card-text">
                            ${details.strInstructions}
                  </p>
              </div>
  `;
  detailsContainer.appendChild(card);
};
