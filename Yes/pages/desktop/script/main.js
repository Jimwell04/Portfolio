// Detector
window.setInterval(() => {
  
  if (window.matchMedia("(max-width: 767px)").matches) {
  
    window.location.href = "../../index.html";
  
  } 
  
},0.1);

// Main program
let message1 = $("#message1");
let message2 = $("#message2");
let message3 = $("#message3");
let watch = $("#watch");

$(document).ready(() => {
 
  message1.hover(() => {
    
    messageManipulate(message1," inverted");
    
  });
  
  message2.hover(() => {
  
    messageManipulate(message2, " inverted");
  
  });
  
  message3.hover(() => {
    
    messageManipulate(message3, " inverted");
    
  });
  
  watch.on("click",() => {
    
    let video = $("#video");
    
    video.load("../../../txt/hallOfFame.txt");
    
  });
  
});

const messageManipulate = (id,add) => {
  
  let clas = id.attr("class");
  
  id.removeClass();
  id.toggleClass(clas + add);
  
}
