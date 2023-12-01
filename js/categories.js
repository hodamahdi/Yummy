export let allCategories;
 export let mealCateg;
import { filterCategories } from "./filterCategory.js"; 
let categoryBtn = document.querySelector('.category-btn');

export async function getCategories() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
   let finalResponse = await response.json()
   allCategories = finalResponse.categories
  
    displayCategories(allCategories)
    getCategMeals()
  
}


//display categories
function displayCategories(allCategories) {

    let cartoona = '';
     for (let i = 0; i < allCategories.length; i++){
         cartoona += `
          <div class="col-md-3 item  categItem  my-3 overflow-hidden  rounded-2 p-3">
         <div class="inner w-100  position-relative ">
           <div class="meal-img ">
             <img src="${allCategories[i].strCategoryThumb}" alt="" class="w-100">
           </div>
         
         <div class="layer bg-white bg-opacity-75 position-absolute start-2 top-0 end-2 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
           <div class="layer-content p-2 ">
             <h2 class="my-2 text-black str-category fs-5 ">${allCategories[i].strCategory}</h2>
                  <p class="category-desc text-muted fs-6 ">${allCategories[i].strCategoryDescription}</p>
                 
             </div>
           </div>
         </div>
       </div> 
       `
     }
    document.getElementById('categoryData').innerHTML = cartoona;
   
    }
// call getCateories
$(categoryBtn).click(function () {
    
    getCategories();
    document.getElementById('contact').classList.add('d-none');
    document.getElementById('categories').classList.remove('d-none');
    document.getElementById('categMeals').classList.add('d-none');
    document.getElementById('Area').classList.add('d-none');
    document.getElementById('AreaMeals').classList.add('d-none');
    document.getElementById('ingredient').classList.add('d-none');
  document.getElementById('ingredientMeals').classList.replace('d-block', 'd-none');
    document.getElementById('search').classList.add('d-none');
   document.getElementById('header').classList.add('d-none');




})

function getCategMeals() {
    let mealItems = document.querySelectorAll('.categItem')
    
    for (let i = 0; i < mealItems.length; i++) {
      mealItems[i].addEventListener('click', function (e) {
        //  console.log(e.target)
      mealCateg = document.querySelectorAll('h2')[i].innerHTML;
        // console.log(mealCateg)
        filterCategories(mealCateg);
        // document.getElementById('header').classList.add('d-none');

        document.getElementById('categories').classList.add('d-none');
        document.getElementById('categMeals').classList.remove('d-none');
        document.getElementById('Area').classList.add('d-none');
        document.getElementById('AreaMeals').classList.add('d-none');
       document.getElementById('ingredient').classList.add('d-none');
        document.getElementById('ingredientMeals').classList.add('d-none');
        document.getElementById('contact').classList.add('d-none');




        })
    
    }
}
