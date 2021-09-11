const searchFood = () => {
  const inputField = document.getElementById("foodInput");
  const inputText = inputField.value;
  if (inputText == "") {
    alert("Please Write Your Food name First");
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayFood(data.meals));
  }

  inputField.value = "";
};

const displayFood = (meals) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  /* for (const meal of meals)  */
  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div>
        <div class="details-div">
            <h3> Meal : ${meal.strMeal} </h3>
            <h3> Meal Origin : ${meal.strArea} </h3>
        </div>
        <div class="image-div"><img src="${meal.strMealThumb}"/></div>
    </div>`;
    container.appendChild(div);
  });
};
