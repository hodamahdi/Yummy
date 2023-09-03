let filterCategory;
import { mealDetail } from "./mealDetails.js";
// import { mealCateg } from "./categories.js";

export async function filterCategories(mealCateg) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCateg}`);
    let finalResponse = await response.json();
    filterCategory = finalResponse.meals;
  console.log(filterCategory)
  
  displayFiterCategory(filterCategory);
  // getmealId()
   
}


function displayFiterCategory(filterCategory) {
    let cartoona = '';
  for (let i = 0; i < filterCategory.length; i++){
  
        cartoona += `
        <div class="col-md-3 item    my-3 overflow-hidden  rounded-2 p-3">
       <div class="inner w-100  position-relative ">
         <div class="meal-img ">
           <img src="${filterCategory[i].strMealThumb}" alt="" class="w-100">
         </div>
       
       <div class="meal-layer bg-white bg-opacity-75 position-absolute start-0 top-0 end-0 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
         <div class="layer-content p-2  ">
           <h2 class="my-2 text-black fs-5 ">${filterCategory[i].strMeal}</h2>
           <span class='opacity-0'> ${filterCategory[i].idMeal}</span>
           </div>
         </div>
       </div>
     </div> 
     `
        
    }
  document.getElementById('meals').innerHTML = cartoona;

 }




//  function getmealId() {
//   let mealItems = document.querySelectorAll('.item ')
  
//   for (let i = 0; i < mealItems.length; i++) {
//       mealItems[i].addEventListener('click', function (e) {
//           // console.log(e.target)
//         let mealId = document.querySelectorAll('.item span')[i].innerHTML;
//         // console.log(mealId)
          
//         mealDetail(mealId)
//         document.getElementById('categories').classList.replace('d-block', 'd-none');

//         document.getElementById('mealDetail').classList.remove('d-none');
//         document.getElementById('categMeals').classList.replace('d-block', 'd-none');


//       })
  
//   }
// }
