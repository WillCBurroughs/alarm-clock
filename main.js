
let timer;
let secondTimer;

let holdSetTimeBtn;
let goBack;

// Getting divs to be displayed 
let homePage = document.querySelector(".holdMainScreen");
let holdTimePage = document.querySelector(".holdSetTimeScreen");

// Getting final 2 divs
let holdUpload = document.querySelector(".uploadSound");
let holdAlarmPage = document.querySelector(".holdAlarmScreen");




 // querySelectors for this page need to be recalled now
holdSetTimeBtn = document.querySelector(".createNewTimeBtn");

// Goes to next page 
holdSetTimeBtn.addEventListener("click", showSetTime);

// Holds time we will use 
let holdDate = document.querySelector(".currentDate");
let holdTimeDisplay = document.querySelector(".currentTime");


// Need to get the current date as soon as screen loads in 

function setDate(){

    let currentDate = new Date(); 
    let holdHours = currentDate.getHours();
    let holdMinutes = currentDate.getMinutes();
    let holdSeconds = currentDate.getSeconds(); 
    let holdFullTime = String(holdHours + ":" + holdMinutes + ":" + holdSeconds);

    let holdMonth = currentDate.getMonth() + 1;
    let holdDay = currentDate.getDate();
    let holdYear = currentDate.getFullYear();
    let holdFullDate = String( holdMonth + ":" + holdDay + ":" + holdYear);

    holdDate.textContent = "Date: " + holdFullDate;
    holdTimeDisplay.textContent = holdFullTime;
}

setDate();

// Calls the date every second allows us to keep time 
timer = setInterval(() => {
             setDate()
}, 1000)


// Moves to set time screen
function showSetTime(){

    window.location.href = "setTime.html";
    
}

// Tests if value is made 
if(localStorage.getItem("timesSaved") !== null){

    secondTimer = setInterval(() => {
        checkDate()
}, 1000)

}

function checkDate(){

    let date = new Date(); 
    let holdhours = date.getHours();
    if(holdhours < 9){
        holdhours = String("0" + holdhours);
    }
    let holdArray = JSON.parse(localStorage.getItem("timesSaved"));
    let holdMins = date.getMinutes();
    let holdHoursAndMins = String(holdhours + ":" + holdMins);
    console.log(holdHoursAndMins);
    
    if(holdArray.includes(holdHoursAndMins)){
        window.location.href = "alarmTriggered.html";
    }

}




