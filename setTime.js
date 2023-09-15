
// Allows for values to persist
let holdTimes;

let moveToSetAudio; 

moveToSetAudio = document.querySelector(".uploadNewSoundBtn");

moveToSetAudio.addEventListener("click", function() {

        window.location.href = "uploadSound.html";

});

// Check if 'timesSaved' exists in localStorage
if (localStorage.getItem("timesSaved") === null) {
    holdTimes = []; // Initialize as an empty array if it doesn't exist
} else {
    holdTimes = JSON.parse(localStorage.getItem("timesSaved"));

    // Sorting this. May use this functionality later for deletions and switching functions off 
    holdTimes.sort((a,b) => a - b)
}

function goBackToHome(){
    window.location.href = "index.html";
    console.log("I can read this");
}

let returnClick = document.querySelector(".goBack");

returnClick.addEventListener("click", goBackToHome);

let makeNewTimeButton = document.querySelector(".makeNewTime");
let holdValue = document.querySelector(".setTimeToUse")

makeNewTimeButton.addEventListener("click", function() {

    if(isValidTime(holdValue.value)){
        holdTimes.push(holdValue.value);
        console.log(holdTimes);
        localStorage.setItem("timesSaved", JSON.stringify(holdTimes));
        window.location.href = "index.html";
    }
});

// Tests if time is valid before adding it
function isValidTime(inputTime) {
    // Regular expression to match the time in HH:MM format
    let timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return inputTime.trim() !== '' && timePattern.test(inputTime);
}