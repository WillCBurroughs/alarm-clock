
let timer;
let secondTimer;
let isToggled = true;

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

    // Will call function to create time element for each element
    let storeArray = JSON.parse(localStorage.getItem("timesSaved"));
    displayTimesInRows(storeArray);

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
    
    if (holdArray.includes(holdHoursAndMins)) {

        // ckecking selected timer
        let slider = document.querySelector(`[data-time="${holdHoursAndMins}"]`);
        
        // Check if toggled on 
        if (holdArray.includes(holdHoursAndMins)) {
            // Checking selected timer
            let slider = document.querySelector(`[data-time="${holdHoursAndMins}"]`);
            
            // Check if the slider is in the "on" state
            if (slider && slider.classList.contains('on')) {
                window.location.href = "alarmTriggered.html";
            }
        }
      }

}

function displayTimesInRows(timesArray) {
    let largeGrayHolder = document.querySelector('.largeGrayHolder');
  
    // Clear the existing content in largeGrayHolder
    largeGrayHolder.innerHTML = '';
  
    for (let i = 0; i < timesArray.length; i++) {

      let holdLabel = document.createElement('div');

      // Sets class for the label wrapper
      holdLabel.classList.add('holdTimeFromArray');

      // Create a new label element
      let label = document.createElement('label');
      label.textContent = timesArray[i];
  

      let newDelete = document.createElement("img");
      newDelete.src = "img/remove.png";

      // So we can reference and delete button
      newDelete.classList.add("deleteButton");

    // Attach a click event listener to the delete button
     newDelete.addEventListener("click", function () {
        // Access the label textContent of the associated div
        let labelText = label.textContent;
  
        // Find the index of the labelText in timesArray
        let index = timesArray.indexOf(labelText);
  
        // If the labelText is found in timesArray, remove it
        if (index !== -1) {
          timesArray.splice(index, 1);
          // Save the updated array to localStorage
          localStorage.setItem("timesSaved", JSON.stringify(timesArray));
          // Update display
          displayTimesInRows(timesArray);
        }
      });

      // Adds divs for swipe functionality
      let rectangularDiv = document.createElement("div");
      rectangularDiv.classList.add("rectangularDiv");

      let circularDiv = document.createElement("div");
      circularDiv.classList.add("circleDiv");

      // For clicking rectangle and changing on/off state
      rectangularDiv.appendChild(circularDiv);

      rectangularDiv.setAttribute('data-time', timesArray[i]);
 
      let isToggled = false;

      // Attach a click event listener to the rectangular div
      rectangularDiv.addEventListener('click', function () {
        if (isToggled) {
          // Toggle off: Move the circular div and change color
          circularDiv.style.transform = 'translateX(0)';
          rectangularDiv.style.backgroundColor = '#D2CCCC';
        } else {
          // Toggle on: Move the circular div and change background

          circularDiv.style.transform = 'translateX(30px)';
          rectangularDiv.style.backgroundColor = '#000000';
        }
      
        console.log(isToggled);
        // Toggle the state
        isToggled = !isToggled;
      
        // Add or remove 'on' class based on the toggle state
        if (isToggled) {
          rectangularDiv.classList.add('on');
        } else {
          rectangularDiv.classList.remove('on');
        }
      });

      // Sets class
      label.classList.add('storeItem');

      holdLabel.appendChild(rectangularDiv);

      holdLabel.appendChild(label);

      holdLabel.appendChild(newDelete);

      // Create a new div for each row
      if (i % 3 === 0) {
        const row = document.createElement('div');
        row.classList.add('row'); // You can style the row using CSS
  
        // Append the row to largeGrayHolder
        largeGrayHolder.appendChild(row);
      }
  
      // Append the label to the current row
      let currentRow = largeGrayHolder.querySelector('.row:last-child');
      currentRow.appendChild(holdLabel);
    }
  }




