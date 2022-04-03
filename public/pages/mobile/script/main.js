// Detector
window.setInterval(() => {

  if (!window.matchMedia("(max-width: 767px)").matches) {

    window.location.href = "../../index.html";

  }

}, 0.1);


// Main program
let btnMenu = $("#btnMenu");
let menu = $("#menu");
let message1 = $("#message1");
let message2 = $("#message2");
let message3 = $("#message3");

$(document).ready(() => {
  
  btnMenu.on("click", () => {
  
    menu.toggle("slow");
  
    btnMenu.toggleClass("btnAdjust btnDefault");
  
  });
  
  message1.click(() => {
  
    messageManipulate(message1, " inverted");
  
  });
  
  message2.click(() => {
  
    messageManipulate(message2, " inverted");
  
  });
  
  message3.click(() => {
  
    messageManipulate(message3, " inverted");
  
  });
  
});

const messageManipulate = (id,add) => {
  
  let clas = id.attr("class");
  
  id.removeClass();
  id.toggleClass(clas + add);
  
}

