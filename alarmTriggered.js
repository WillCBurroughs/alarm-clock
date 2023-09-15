
const savedSound = localStorage.getItem('selectedSound');
let secondary = new Audio("alarm.mp3");

if (savedSound) {
  // Create an audio element
  const audio = new Audio();

  // Set the audio element's source to the saved sound data URL
  audio.src = savedSound;

  // Add the audio element to the document or play it as needed
  document.body.appendChild(audio);

  // Example: Play the audio
  audio.play();
} else {
  secondary.play();
}