let allIngrdient;
let ingredBtn = document.querySelector('.ingred-btn');
import { getFilterIngrdient } from "./filterIngredient.js";
 export async function getIngredient() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let finalResponse = await response.json();
    allIngrdient = finalResponse.meals;
    //  console.log(allIngrdient);
     displayIngredient(allIngrdient);
     getIngredientName();
}



function displayIngredient() {
    let cartoona = '';
    for (let i = 0; i <20; i++){
        cartoona += `
        <div class="col-md-3 meal-ingredient my-3 overflow-hidden  rounded-2 p-3">
       <div class="inner  text-white text-center">
       <i class="fa-solid fa-drumstick-bite fa-4x p-2"></i>
       <h2 class="strIngredient text-white fs-6">${allIngrdient[i].strIngredient}</h2>
       <p class="str-desc text-muted fs-6 ">${allIngrdient[i].strDescription}</p>

      </div>
     </div> 
     `
    }
    document.getElementById('ingredientCategory').innerHTML = cartoona;
}

ingredBtn.addEventListener('click', function () {
    getIngredient();
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categMeals').classList.add('d-none');
    document.getElementById('Area').classList.add('d-none');
    document.getElementById('AreaMeals').classList.add('d-none');
    document.getElementById('ingredient').classList.remove('d-none');
  document.getElementById('ingredientMeals').classList.add('d-none');
  document.getElementById('search').classList.add('d-none');
  document.getElementById('contact').classList.add('d-none');
  document.getElementById('mealDetail').classList.add('d-none');
  document.getElementById('header').classList.add('d-none');


})

//get mealIngradient Name
function getIngredientName() {
    let mealIngredient;
    let mealItems = document.querySelectorAll('.meal-ingredient ')
   
    for (let i = 0; i < 20; i++) {
        mealItems[i].addEventListener('click', function (e) {
            // console.log(e.target)
            mealIngredient = document.querySelectorAll('h2')[i].innerHTML;
            //  console.log(mealIngredient)
            getFilterIngrdient(mealIngredient)
             document.getElementById('categories').classList.add('d-none');
             document.getElementById('categMeals').classList.add('d-none');
             document.getElementById('Area').classList.add('d-none');
             document.getElementById('AreaMeals').classList.add('d-none');
            document.getElementById('ingredient').classList.add('d-none');
            document.getElementById('ingredientMeals').classList.remove('d-none');
            document.getElementById('contact').classList.add('d-none');

            //  document.getElementById('header').classList.add('d-none');


        
            // console.log(mealIngredient)
        })
    }
}
