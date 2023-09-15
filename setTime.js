
function goBackToHome(){
    window.location.href = "index.html";
    console.log("I can read this");
}

let returnClick = document.querySelector(".goBack");

returnClick.addEventListener("click", goBackToHome);