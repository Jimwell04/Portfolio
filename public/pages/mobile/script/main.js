// Detector
window.setInterval(() => {

  if (!window.matchMedia("(max-width: 767px)").matches) {

    window.location.href = "../../index.html";

  }

}, 0.1);


// Main program
let btnMenu = $("#btnMenu");
let menu = $("#menu");

btnMenu.on("click", () => {
  
  menu.toggle("slow");
  
  btnMenu.toggleClass("btnAdjust btnDefault");
  
});
