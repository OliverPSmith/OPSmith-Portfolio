////////// Project Modals

///// Open Modal

// Recipe 
const openRecipeModal = document.getElementById('recipe-project-image');
const recipeModal = document.getElementById('recipe-modal');
function openRecipe() {
    recipeModal.style.display = "flex";
}
openRecipeModal.addEventListener('click', openRecipe);

// Barbers Booking
const openBarbersModal = document.getElementById('barbers-project-image');
const barbersModal = document.getElementById('barbers-modal');
function openBarbers() {
    barbersModal.style.display = "flex";
}
openBarbersModal.addEventListener('click', openBarbers);

// Weather App
const openWeatherModal = document.getElementById('weather-app-project-image');
const weatherModal = document.getElementById('weather-modal');
function openWeather() {
    weatherModal.style.display = "flex";
}
openWeatherModal.addEventListener('click', openWeather);

// Password Checker
const openPasswordModal = document.getElementById('password-project-image');
const passwordModal = document.getElementById('password-modal');
function openPassword() {
    passwordModal.style.display = "flex";
}
openPasswordModal.addEventListener('click', openPassword);

// Rock, Paper, Scissors
const openRPSModal = document.getElementById('r-p-s-project-image');
const rPSModal = document.getElementById('r-p-s-modal');
function openRPS() {
    rPSModal.style.display = "flex";
}
openRPSModal.addEventListener('click', openRPS);

// Convert Number to Numerals
const openNumeralsModal = document.getElementById('numerals-project-image');
const numeralsModal = document.getElementById('numerals-modal');
function openNumerals() {
    numeralsModal.style.display = "flex";
}
openNumeralsModal.addEventListener('click', openNumerals);

///// Close Modal

// Close by Close Button
const closeButtons = document.getElementsByClassName('close-button');

for (let i = 0; i < closeButtons.length; i++) {
    const closeButton = closeButtons[i];
    closeButton.addEventListener('click', e => {
        closeButton.parentElement.parentElement.parentElement.style.display = "none";
    })
}

// Close by Clicking Anywhere
const projectModal = document.getElementsByClassName('project-modal');

for (let i = 0; i < projectModal.length; i++) {
    const closeModal = projectModal[i];
    window.addEventListener('click', e => {
       if (e.target == closeModal) {
        closeModal.style.display = "none";
       }
   })
}


///// Right and Left Arrows

// Weather App Arrows
const weatherRightArrow = document.getElementById('weather-right-arrow');
const weatherLeftArrow = document.getElementById('weather-left-arrow');

function weatherMoveRight() {
    if (weatherModal.style.display = "flex") {
        weatherModal.style.display = "none"
        rPSModal.style.display = "flex";
    };
};

function weatherMoveLeft() {
    if (weatherModal.style.display = "flex") {
        weatherModal.style.display = "none"
        barbersModal.style.display = "flex";
    };
};

weatherRightArrow.addEventListener('click', weatherMoveRight);
weatherLeftArrow.addEventListener('click', weatherMoveLeft);

// Rock, Paper, Scissors Arrows
const rPSRightArrow = document.getElementById('r-p-s-right-arrow');
const rPSLeftArrow = document.getElementById('r-p-s-left-arrow');

function rPSMoveRight() {
    if (rPSModal.style.display = "flex") {
        rPSModal.style.display = "none"
        numeralsModal.style.display = "flex";
    };
};

function rPSMoveLeft() {
    if (rPSModal.style.display = "flex") {
        rPSModal.style.display = "none"
        weatherModal.style.display = "flex";
    };
};

rPSRightArrow.addEventListener('click', rPSMoveRight);
rPSLeftArrow.addEventListener('click', rPSMoveLeft);

// Numerals Converter Arrows
const numeralsRightArrow = document.getElementById('numerals-right-arrow');
const numeralsLeftArrow = document.getElementById('numerals-left-arrow');

function numeralsMoveRight() {
    if (numeralsModal.style.display = "flex") {
        numeralsModal.style.display = "none"
        passwordModal.style.display = "flex";
    };
};

function numeralsMoveLeft() {
    if (numeralsModal.style.display = "flex") {
        numeralsModal.style.display = "none"
        rPSModal.style.display = "flex";
    };
};

numeralsRightArrow.addEventListener('click', numeralsMoveRight);
numeralsLeftArrow.addEventListener('click', numeralsMoveLeft);

// Password Checker Arrows
const passwordRightArrow = document.getElementById('password-right-arrow');
const passwordLeftArrow = document.getElementById('password-left-arrow');

function passwordMoveRight() {
    if (passwordModal.style.display = "flex") {
        passwordModal.style.display = "none"
        recipeModal.style.display = "flex";
    };
};

function passwordMoveLeft() {
    if (passwordModal.style.display = "flex") {
        passwordModal.style.display = "none"
        numeralsModal.style.display = "flex";
    };
};

passwordRightArrow.addEventListener('click', passwordMoveRight);
passwordLeftArrow.addEventListener('click', passwordMoveLeft);

// Barbers Arrows
const barbersRightArrow = document.getElementById('barber-right-arrow');
const barbersLeftArrow = document.getElementById('barber-left-arrow');

function barbersMoveRight() {
    if (barbersModal.style.display = "flex") {
        barbersModal.style.display = "none"
        weatherModal.style.display = "flex";
    };
};

function barbersMoveLeft() {
    if (barbersModal.style.display = "flex") {
        barbersModal.style.display = "none"
        recipeModal.style.display = "flex";
    };
};

barbersRightArrow.addEventListener('click', barbersMoveRight);
barbersLeftArrow.addEventListener('click', barbersMoveLeft)

// Recipe Arrows
const recipeRightArrow = document.getElementById('recipe-right-arrow');
const recipeLeftArrow = document.getElementById('recipe-left-arrow');

function recipeMoveRight() {
    if (recipeModal.style.display = "flex") {
        recipeModal.style.display = "none"
        barbersModal.style.display = "flex";
    };
};

function recipeMoveLeft() {
    if (recipeModal.style.display = "flex") {
        recipeModal.style.display = "none"
        passwordModal.style.display = "flex";
    };
};

recipeRightArrow.addEventListener('click', recipeMoveRight);
recipeLeftArrow.addEventListener('click', recipeMoveLeft)



///// Burger Button Clicked

function burgerClick(menu) {
    menu.classList.toggle("burgerClick");
}






