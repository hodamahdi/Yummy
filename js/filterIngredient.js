let allFilterIngredients;
import { mealDetail } from "./mealDetails.js";


 export async function getFilterIngrdient(mealIngredient) {
     let response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${mealIngredient}`);
     let finalResponse = await response.json();
   allFilterIngredients = finalResponse.meals;
  //  console.log(mealId)
    //  console.log(allFilterIngredients)
   if (allFilterIngredients != null) {
     displayFilterIngredient(allFilterIngredients)
     getmealId()
   }
     
    
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
            <h4 class='opacity-0> ${allFilterIngredients[i].idMeal}</h4>

            </div>
          </div>
        </div>
      </div> 
     `
    }
  document.getElementById('ingredientMeal').innerHTML = cartoona;



}


function getmealId() {
  let mealItems = document.querySelectorAll('.meal-layer')
    
  for (let i = 0; i < mealItems.length; i++) {
    mealItems[i].addEventListener('click', function (e) {  
        //  console.log(e.target)
      let mealId = document.querySelectorAll('h4')[i].innerHTML;
        console.log(mealId)
       document.getElementById('mealDetail').classList.remove('d-none');
      document.getElementById('categories').classList.add('d-none');
      document.getElementById('categMeals').classList.add('d-none');
      document.getElementById('header').classList.add('d-none');
      document.getElementById('ingredient').classList.add('d-none');
      document.getElementById('ingredientMeals').classList.add('d-none');
          
      mealDetail(mealId)

    

    })
  
  }
}


