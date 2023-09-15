

let holdContinue = document.querySelector(".uploadFinalSound");


const soundInput = document.querySelector(".custom-file-input");

// Add an event listener to capture the selected file
soundInput.addEventListener('change', function(event) {
  const selectedFile = event.target.files[0]; // Get the selected file

  // Create a FileReader to read the file as a data URL
  const reader = new FileReader();

  reader.onload = function() {
    // Save the data URL (base64 encoded) to localStorage
    localStorage.setItem('selectedSound', reader.result);
  };

  // Read the file as a data URL
  reader.readAsDataURL(selectedFile);
});

holdContinue.addEventListener("click", function() {

    window.location.href = "setTime.html";

});