let mealLetter =document.querySelector('.search-letter')
export async function searchFirstLetter(letter) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    let finalResponse = await response.json();
    let allMeals = finalResponse.meals;
    // console.log(allMeals)
    let cartoona = '';
    for (let i = 0; i < allMeals.length; i++){
        
        if ( letter =allMeals[i].strMeal.indexOf(1)) {
            cartoona += `
            <div class="col-md-3 item    my-3 overflow-hidden  rounded-2 p-3">
            <div class="inner w-100  position-relative ">
              <div class="meal-img ">
                <img src="${allMeals[i].strMealThumb}" alt="" class="w-100">
              </div>
            
            <div class="meal-layer bg-white bg-opacity-75 position-absolute start-0 top-0 end-0 bottom-0 rounded-2 d-flex justify-content-center align-items-center text-center text-white">
              <div class="layer-content p-2 ">
                <h2 class="my-2 text-black str-category fs-5 ">${allMeals[i].strMeal}</h2>
    
                </div>
              </div>
            </div>
          </div> 
            `
        }
    }
    document.getElementById('searcMealsletter').innerHTML =cartoona;
}
mealLetter.addEventListener('keyup', function (e) {
    // console.log(e.target.value)
    document.getElementById('searcMealsName').classList.add('d-none');
    document.getElementById('searcMealsletter').classList.remove('d-none');


    searchFirstLetter(e.target.value);

})



