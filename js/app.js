document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

//Toggle theme depending on the time of the day

var today = new Date(); //liczba milisekund które upłyneły od północy 01.01.1970
var currentHour = today.getHours();

function setTheme () {
    var themeContainer = document.querySelector('.container')
    var morning = 6
    var evening = 14
    var night = 22
    if (currentHour >= morning && currentHour < evening) {
        themeContainer.classList.add("theme_light")
    } else if (currentHour >= evening && currentHour < night) {
        themeContainer.classList.add("theme_dark")
    } else {
        themeContainer.classList.add("theme_neon")
    }
}

setTheme();







//Write keys on the screen (after clicking any number or operation)


// var keys = document.querySelectorAll('.calculator_keypad_number')
// console.log(keys[0])

// function writeNumber(el) {
//     console.log(keys[el])
// }

// var keysContent = []
// for (var i=0; i<keys.length; i++) {    
//     keysContent.push(keys[i].textContent)
// }

// for (var i=0; i<keys.length; i++) {
//     keys[i].addEventListener('click', function(){
//         var alala = i;
//         console.log(alala)
//     })
// }


// function changeScreen () {
//     var screenContent = [0];
//     var currentScreen = document.querySelector(".calculator_screen_number");
//     console.log(currentScreen.textContent);

//     function addScreenElement () {
        
//     }

//     currentScreen.textContent = screenElement


// };




//Make a calculation and return the result (after clicking =)


//Reset screen to 0 (after clicking reset)


//delete what was on the screen but remember previous result (after clicking del) or delete only last number/operation



//toggle theme based on theme button




//remember preferred theme

 });