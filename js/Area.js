let allArea;
let areaBtn = document.querySelector('.area-btn');
import { getAreaCategories } from "./filterArea.js";
// console.log(areaBtn)
//get mealsArea
 export async function getMealsArea() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
     let finalResponse = await response.json();
     allArea = finalResponse.meals
    //  console.log(allArea)
     displayMealsArea(allArea);
     getAreaName()
}


function displayMealsArea(allArea) {
    let cartoona = '';
    for (let i = 0; i < allArea.length; i++){
        cartoona += `
         <div class="col-md-3 area  text-center p-3 ">
        <div class="inner  text-white p-5">
          <i class="fa-solid fa-house-laptop fa-4x"></i>
          <h3 class="areaName">${allArea[i].strArea}</h3>
        </div>
     </div>

        `
    }
    document.getElementById('namesArea').innerHTML = cartoona;
}

//call getArea
areaBtn.addEventListener('click', function () {
    getMealsArea();
    

    document.getElementById('contact').classList.add('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categMeals').classList.add('d-none');
    document.getElementById('Area').classList.remove('d-none');
    document.getElementById('AreaMeals').classList.replace('d-block', 'd-none');
    document.getElementById('ingredient').classList.add('d-none');
  document.getElementById('ingredientMeals').classList.replace('d-block', 'd-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');







})


//get areaName
function getAreaName() {

    let areaItems = document.querySelectorAll('.area');
    let areaName;
    // console.log(areaItems)
   
    for (let i = 0; i < areaItems.length; i++) {
        areaItems[i].addEventListener('click', function (e) {
            // console.log(e.target)
            areaName = document.querySelectorAll('h3')[i].innerHTML;
            
            getAreaCategories(areaName)

        })
    
    }

}