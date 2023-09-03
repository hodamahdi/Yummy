let allFilterIngredients;
 export async function getFilterIngrdient(mealIngredient) {
     let response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${mealIngredient}`);
     let finalResponse = await response.json();
   allFilterIngredients = finalResponse.meals;
  //  console.log(mealId)
     console.log(allFilterIngredients)
    
       displayFilterIngredient(allFilterIngredients)

     
    
}

function displayFilterIngredient(allFilterIngredients) {
    let cartoona = '';
    for (let i = 0; i <allFilterIngredients.length; i++){
        cartoona += `
        <div class="col-md-3 item  my-3 overflow-hidden  rounded-2 p-3">
        <div class="inner  position-relative   ">
          <div class="meal-img ">
            <img src="${allFilterIngredients[i].strMealThumb}" alt="" class="w-100">
          </div>
        
        <div class="meal-layer bg-white bg-opacity-75 position-absolute start-0 top-0 end-0 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
          <div class="layer-content p-2 ">
            <h2 class="my-2 text-black str-category fs-5 ">${allFilterIngredients[i].strMeal}</h2>

            </div>
          </div>
        </div>
      </div> 
     `
    }
  document.getElementById('ingredientMeal').innerHTML = cartoona;



}


