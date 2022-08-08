// Detector
window.setInterval(() => {

  if (!window.matchMedia("(max-width: 767px)").matches) {

    window.location.href = "../../index.html";

  }

}, 0.1);


// Main program
let btnMenu = $("#btnMenu");
let menu = $("#menu");
let loader = $("#loader");
let img = $("#image");
let info = $("#info");
let modal = $("#modal");

$(document).ready(() => {
  
  // Image Load
  
  img.on("load",() => {
    
    loader.removeClass();
    
  });
  
  // Navbar
  
  btnMenu.on("click", () => {
  
    menu.toggle("slow");
  
    btnMenu.toggleClass("btnAdjust btnDefault");
  
  });
  
  // Info Modal

  info.on("click", () => {
    
    let modal = $("#modal");
    
    modal.load("../../data/modal.txt", () => {
      
      modal.modal("show");
      
    });
  });
  
});
  
