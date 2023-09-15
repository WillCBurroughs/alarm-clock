
let timer;

// Getting divs to be displayed 
let homePage = document.querySelector(".holdMainScreen");
let holdTimePage = document.querySelector(".holdSetTimeScreen");

// Getting final 2 divs
let holdUpload = document.querySelector(".uploadSound");
let holdAlarmPage = document.querySelector(".holdAlarmScreen");


// First off setting only the main homepage to be visible when downloaded 
function showMain(){
    // Show the main page
    homePage.style.display = "visible";

    // Hide the other pages
    holdTimePage.style.display = "none";
    holdUpload.style.display = "none";
    holdAlarmPage.style.display = "none";

}

// When loading in page we will remove everything other than main Page 
showMain(); 


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




