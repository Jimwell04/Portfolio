let body = $("body")

$.getJSON("../../system/system.json", (data) => {
  
  window.setInterval(() => {
    
    if (data.ShoutDown) {
    
    window.location.href = "../unavailable.html"
    
  } else {
    
    
  }
    
  },0.1);
  
  if (data.Development.Developing) {
    
    body.append(`
    
    <div class="ui bottom fixed menu">
      <center>
        <div class="ui negative message">
          This website is currently under development 
        </div>
      </center>
    </div>
    
    `);
    
  } else if (data.Development.Editing) {
    
    body.append(`
        
        <div class="ui bottom fixed menu">
          <center>
            <div class="ui warning message">
              This website is currently under editing 
            </div>
          </center>
        </div>
        
        `);
    
  } else {
    
    
  }
  
});
