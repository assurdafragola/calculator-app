document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

    //Toggle theme depending on the time of the day

    var themeContainer = document.querySelector('.container')

    function setTheme () {
        var today = new Date() //liczba milisekund które upłyneły od północy 01.01.1970
        var currentHour = today.getHours()
        var morning = 6
        var evening = 14
        var night =22
        if (currentHour >= morning && currentHour < evening) {
            themeContainer.classList.add("theme_light")
        } else if (currentHour >= evening && currentHour < night) {
            themeContainer.classList.add("theme_dark")
        } else {
            themeContainer.classList.add("theme_neon")
        }
    }

    setTheme();

    //toggle theme based on theme button???

    var themes = ["theme_light", "theme_dark", "theme_neon"]

    var theme1Btn = document.querySelector("#theme1")
    var theme2Btn = document.querySelector("#theme2")
    var theme3Btn = document.querySelector("#theme3")

    function changeTheme (currentTheme) {
        themeContainer.classList.remove("theme_light", "theme_dark", "theme_neon")
        themeContainer.classList.add(currentTheme)
    }


    theme1Btn.addEventListener('click', function () {
        changeTheme(themes[0])
    })

    theme2Btn.addEventListener('click', function () {
        changeTheme(themes[1])
    })

    theme3Btn.addEventListener('click', function () {
        changeTheme(themes[2])
    })



    //remember preferred theme???

    //Calculations

    var newScreen = "";
    var newOperation = null;

    function updateScreen () {
        document.querySelector('.calculator_screen_number').textContent = newScreen
    }

    function writeCalc (key) {
        newScreen += key;
        if (newOperation === null) {
            newOperation = key
        } else if (key === 'x') {
            newOperation += '*'
        } else {
            newOperation += key
        }
        updateScreen();
    }

    var numbersBtn = document.querySelectorAll('.calculator_keypad_number')

    for (var i=0; i<numbersBtn.length; i++) {
        numbersBtn[i].addEventListener('click', function (event) {
            writeCalc(event.target.textContent)}
        );    
    }

    var operatorsBtn = document.querySelectorAll('.calculator_keypad_operation')

    for (var i=0; i<operatorsBtn.length; i++) {
        operatorsBtn[i].addEventListener('click', function (event) {
            writeCalc(event.target.textContent)
        });    
    }

    //RESULT

    function makeCalculation () {
        var result = eval(newOperation);
        newScreen = result;
        newOperation = result;
        updateScreen();
    }

    var resultBtn = document.querySelector('.result')

    resultBtn.addEventListener('click', function() {
        makeCalculation()
    })

    //DELETE

    function deleteCalc () {
        newScreen = newScreen.substring(0, newScreen.length-1) 
        newOperation = newOperation.substring(0, newOperation.length-1)
        updateScreen()
    }

    var deleteBtn = document.querySelector('.delete')

    deleteBtn.addEventListener('click', function() {
        deleteCalc();
    })

    //RESET 

    function resetCalc () {
        newScreen = "";
        newOperation = null;
        updateScreen();
    }

    var resetBtn = document.querySelector('.reset')

    resetBtn.addEventListener('click', function(){
        resetCalc();
    })

});