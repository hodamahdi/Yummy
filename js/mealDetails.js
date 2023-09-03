export async function mealDetail(mealId) {
    let response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    let finalResponse = await response.json();
    let allMeals = finalResponse.meals;
    console.log(allMeals)
    displayMealDetail(allMeals)
}
// 


function displayMealDetail(allMeals) {
   let cartoona = '';
   for(let i = 0; i < allMeals.length; i++){
       cartoona =`

   <div class="col-md-4 my-5  ">
   <div class="mealImg">
     <img src="${allMeals[i].strMealThumb}" alt="" class="w-100">
   </div>
  <h2 class="meal-name">${allMeals[i].strMeal}</h2>
   </div>
   <div class=" col-md-8 ">
    <div class="mealInfo ">
     <h2 class="my-1 ">Instructions</h2>
     <p class="">${allMeals[i].strInstructions}</p>
       <h4 class="meal-area">Area: <span class=" fs-6 bg-transparent">${allMeals[i].strArea}</span></h4>
       <h5 class="meal-category">category: <span class=" fs-6 bg-transparent">${allMeals[i].strCategory}</span></h5>
       <div class="recipe p-2">
         <h2>Recipes:</h2>
         <span>${allMeals[i].strMeasure1}${allMeals[i].strIngredient1}</span>
         <span>${allMeals[i].strMeasure2}${allMeals[i].strIngredient2}</span>
         <span>${allMeals[i].strMeasure3}${allMeals[i].strIngredient3}</span>
         <span>${allMeals[i].strMeasure4}${allMeals[i].strIngredient4}</span>
         <span>${allMeals[i].strMeasure5}${allMeals[i].strIngredient5}</span>
         <span>${allMeals[i].strMeasure6}${allMeals[i].strIngredient6}</span>
         <span>${allMeals[i].strMeasure7}${allMeals[i].strIngredient7}</span>
         <span>${allMeals[i].strMeasure8}${allMeals[i].strIngredient8}</span>
         <span>${allMeals[i].strMeasure9}${allMeals[i].strIngredient9}</span>
         <span>${allMeals[i].strMeasure10}${allMeals[i].strIngredient10}</span>
         <span>${allMeals[i].strMeasure11}${allMeals[i].strIngredient11}</span>
         <span>${allMeals[i].strMeasure12}${allMeals[i].strIngredient12}</span>
         <span>${allMeals[i].strMeasure13}${allMeals[i].strIngredient13}</span>

       </div>
       <h3 class="tages">Tags: <span class=" fs-6">${allMeals[i].strTags}</span></h3>
       <button class="source-btn py-1 px-2 bg-success border-0 rounded-2 my-1 mx-1">
         <a href="${allMeals[i].strSource}"> Source</a>
       </button>
       <button class="source-btn py-1 px-2 bg-danger border-0 rounded-2 my-1 mx-1">
         <a href="${allMeals[i].strYoutube}"> Youtube</a>
       </button>
    </div>
   </div>
   ` 
   }

   document.getElementById('mealRow').innerHTML= cartoona
}