let welcomeContainer = document.getElementById("welcome-container");
let infoContainer = document.getElementById("info-container");
let hello = document.getElementById("hello");
let welcome = document.getElementById("welcome");

function welcomeHidder() {
  welcomeContainer.style.display = "none";
  infoContainer.style.display = "grid";
  hello.style.display = "fixed";
}
