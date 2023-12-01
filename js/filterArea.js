let allAreaCategories;
import { mealDetail } from "./mealDetails.js";

//get meals by area
 export async function getAreaCategories(areaName) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    let finalResponse = await response.json();
     allAreaCategories = finalResponse.meals;
    console.log(allAreaCategories)
   displayAreaCategories(allAreaCategories);
   getmealId()
}



function displayAreaCategories(allAreaCategories) {
    let cartoona = '';
    for (let i = 0; i < allAreaCategories.length; i++){
        cartoona += `
        <div class="col-md-3 item    my-3 overflow-hidden  rounded-2 p-3">
        <div class="inner w-100  position-relative ">
          <div class="meal-img ">
            <img src="${allAreaCategories[i].strMealThumb}" alt="" class="w-100">
          </div>
        
        <div class="meal-layer bg-white bg-opacity-75 position-absolute start-0 top-0 end-0 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
          <div class="layer-content p-2 ">
            <h2 class="my-2 text-black str-category fs-5 ">${allAreaCategories[i].strMeal}</h2>
            <h4 class='opacity-1'> ${allAreaCategories[i].idMeal}</h4>

            </div>
          </div>
        </div>
      </div> 
      `
        
    }
    document.getElementById('mealsArea').innerHTML=cartoona
}
function getmealId() {
  let mealItems = document.querySelectorAll('.meal-layer')
    
  for (let i = 0; i < mealItems.length; i++) {
    mealItems[i].addEventListener('click', function (e) {
      
      // console.log(e.target)
      let mealId = document.querySelectorAll('h4')[i].innerHTML;
       console.log(mealId)
       document.getElementById('mealDetail').classList.remove('d-none');
      document.getElementById('categories').classList.add('d-none');
      document.getElementById('categMeals').classList.add('d-none');
      document.getElementById('header').classList.add('d-none');
      document.getElementById('Area').classList.add('d-none');
      document.getElementById('AreaMeals').classList.add('d-none');
        
          
      mealDetail(mealId)

    

    })
  
  }
}




//close mealDetails
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('#mealDetail').classList.add('d-none');
  document.getElementById('AreaMeals').classList.remove('d-none');
  document.getElementById('categories').classList.add('d-none');
  document.getElementById('categMeals').classList.add('d-none');
  document.getElementById('header').classList.add('d-none');
  document.getElementById('Area').classList.add('d-none');
})