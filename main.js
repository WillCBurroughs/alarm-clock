
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


