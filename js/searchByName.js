let mealName = document.querySelector('.search-name');

export async function searchMealName(term) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    let finalResponse = await response.json();
    let allMeals = finalResponse.meals;
    // console.log(allMeals)
    let cartoona = '';
    for (let i = 0; i < allMeals.length; i++){
        
        if (allMeals[i].strMeal.toLowerCase().includes(term.toLowerCase()) == true) {
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
    document.getElementById('searcMealsName').innerHTML = cartoona;
   

}


// searchMealName('tamiya');

mealName.addEventListener('keyup', function (e) {
    // console.log(e.target.value)
    document.getElementById('searcMealsletter').classList.add('d-none');
    document.getElementById('searcMealsName').classList.remove('d-none')


    searchMealName(e.target.value);

})