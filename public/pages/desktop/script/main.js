// Detector
window.setInterval(() => {
  
  if (window.matchMedia("(max-width: 767px)").matches) {
  
    window.location.href = "../../index.html";
  
  } 
  
},0.1);

// Main Program
let loader = $("#loader");
let img = $("#image");
let info = $("#info");
let modal = $("#modal");


$(document).ready(() => {
  
  // Image Load

  img.on("load", () => {

    loader.removeClass();

  });
  
  // Info Modal

  info.on("click", () => {
    
    let modal = $("#modal");
    
      modal.modal("show");
 
  });
  
});
