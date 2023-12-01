export let userNameInput = document.getElementById('userName');
export let userMailInput = document.getElementById('userMail');
export let userAgeInput = document.getElementById('userAge');
export let userPhoneInput = document.getElementById('userPhone');
export let userPasswordInput = document.getElementById('userPassword');
export let rePasswordInput = document.getElementById('rePassword');
export let submitBtn = document.querySelector('button');
let contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', function () {
    document.getElementById('contact').classList.remove('d-none');
    document.getElementById('categories').classList.add('d-none');
    document.getElementById('categMeals').classList.add('d-none');
    document.getElementById('Area').classList.add('d-none');
    document.getElementById('AreaMeals').classList.add('d-none');
    document.getElementById('ingredient').classList.add('d-none');
  document.getElementById('ingredientMeals').classList.add('d-none');
    document.getElementById('search').classList.add('d-none');
    document.getElementById('header').classList.add('d-none');


})
 
//validation userName


//validation userMail
 function validationMail(userMail) {
    let regex = /^[a-z]{3,}[0-9]*(@gmail|@yahoo).com$/;
    if (regex.test(userMail) == true) {
        document.querySelector('.mail-alert').classList.add('d-none');
        // console.log('true')
     }
   else
    {
        // console.log('false')
        document.querySelector('.mail-alert').classList.remove('d-none');
     };
};
userMailInput.addEventListener('keyup', function (e) {
   let userMail = e.target.value
   validationMail(userMail);


 });

//validation phone number
 function validationPhoneNumber(userPhone) {
    let regex = /^(((010)|(011))|(012))[0-9]{8}$/;
    if (regex.test(userPhone) == true) {
        document.querySelector('.phone-alert').classList.add('d-none');
        // console.log('true')
     }
   else
    {
        // console.log('false')
        document.querySelector('.phone-alert').classList.remove('d-none');
     };
};
userPhoneInput.addEventListener('keyup', function (e) {
   let userPhone = e.target.value
   validationPhoneNumber(userPhone);


});

//validation password
 function validationPassword(userPassword) {
    let regex = /^[a-z]{3}[A-z]{1}[0-9]{2,}[((($|@)|#)|&)]$/;
    if (regex.test(userPassword) == true) {
        document.querySelector('.password-alert').classList.add('d-none');
        // console.log('true')
     }
   else
    {
        // console.log('false')
        document.querySelector('.password-alert').classList.remove('d-none');
     };
};
userPasswordInput.addEventListener('keyup', function (e) {
   let userPassword = e.target.value
   validationPassword(userPassword);


});

//validation rePassword
 function validationRePassword(rePassword) {
   
    if (rePassword === userPasswordInput.value) {
        document.querySelector('.repassword-alert').classList.add('d-none');

    }
    else {
        document.querySelector('.repassword-alert').classList.remove('d-none');

    };
};
rePasswordInput.addEventListener('keyup', function (e) {
   let rePassword = e.target.value
   validationRePassword(rePassword);


});



