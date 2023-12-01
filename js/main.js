//nav
let mainBtn = document.querySelector('.mainBtn');
let navContent = document.querySelector('.nav-content');
let navBtns = document.querySelector('.nav-btns');
let closeBtn = document.querySelector('.close-Btn');
let navItems = document.querySelectorAll('.nav-links ul li a')
import { getCategories } from "./categories.js";
import { filterCategories } from "./filterCategory.js";
import { getMealsArea } from "./Area.js";
import { getAreaCategories } from "./filterArea.js";
import { getIngredient } from "./ingredient.js";
import { getFilterIngrdient } from "./filterIngredient.js";
import { searchMealName } from "./searchByName.js";
import { searchFirstLetter } from "./searchLetter.js";
import { userAgeInput, userMailInput, userNameInput, userPasswordInput, rePasswordInput, userPhoneInput,submitBtn } from "./contactValidation.js";
import { mealDetail } from "./mealDetails.js";
$(mainBtn).click(function () {
    $(navBtns).animate({ left: 0 });
    $(navContent).animate({ left: 0 });

    mainBtn.classList.add('d-none')
    closeBtn.classList.replace('d-none', 'd-block')
   

 })
 
    

$(closeBtn).click(function () {
    $(navContent).animate({ left:"-80%" });
    $(navBtns).animate({ left:"-80%"});
   
    closeBtn.classList.replace('d-block','d-none')

    mainBtn.classList.remove('d-none')
});
$('ul li a ').click(function (e) {
    e.preventDefault()
})


//display search
let searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', function () {
document.getElementById('contact').classList.add('d-none');
document.getElementById('categories').classList.add('d-none');
document.getElementById('categMeals').classList.add('d-none');
document.getElementById('Area').classList.add('d-none');
document.getElementById('AreaMeals').classList.add('d-none');
document.getElementById('ingredient').classList.add('d-none');
document.getElementById('ingredientMeals').classList.add('d-none');
document.getElementById('search').classList.remove('d-none');
document.getElementById('header').classList.add('d-none');


})





window.onload = function () {
    document.getElementById('contact').classList.add('d-none');
document.getElementById('categories').classList.add('d-none');
document.getElementById('categMeals').classList.add('d-none');
document.getElementById('Area').classList.add('d-none');
document.getElementById('AreaMeals').classList.add('d-none');
document.getElementById('ingredient').classList.add('d-none');
document.getElementById('ingredientMeals').classList.add('d-none');
document.getElementById('search').classList.add('d-none');
document.getElementById('header').classList.remove('d-none');

 }
// //get home meals

async function getMainMeals() {
    let response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=`);
    let finalResponse = await response.json();
    let allMeals = finalResponse.meals;

    // console.log(allMeals)
    displayMainMeals(allMeals);
    getmealId()
 }


function displayMainMeals(allMeals) {
    let cartoona = '';
    for (let i = 0; i < 20; i++){
        cartoona += `
       
        <div class="col-md-3 item  my-3 overflow-hidden  rounded-2 p-3">
        <div class="inner  position-relative rounded-3  ">
          <div class="meal-img ">
            <img src="${allMeals[i].strMealThumb}" alt="" class="w-100">
          </div>
        
        <div class="meal-layer bg-white bg-opacity-75 position-absolute start-0 top-0 end-0 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
          <div class="layer-content p-2 ">
            <h3 class="my-2 text-black str-category fs-5 ">${allMeals[i].strMeal}</h3>
            <h4 class="opacity-0 text-white ">${allMeals[i].idMeal}</h4>


            </div>
          </div>
        </div>
      </div> 
     
        `
    }
    document.getElementById('rowData').innerHTML = cartoona;
 }
getMainMeals()



function getmealId() {
    let mealItems = document.querySelectorAll('.item ')
    
    for (let i = 0; i < mealItems.length; i++) {
        mealItems[i].addEventListener('click', function (e) {
            // console.log(e.target)
          let mealId = document.querySelectorAll('.item h4')[i].innerHTML;
           console.log(mealId)
            
           mealDetail(mealId)
  
          document.getElementById('mealDetail').classList.remove('d-none');
          document.getElementById('header').classList.add('d-none');
       
        })
    
    }
  }
 


//close mealDetails
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#mealDetail').classList.add('d-none');
    document.getElementById('header').classList.remove('d-none');
    
  })