function tab(evt, tabName) {
    
   
  
 
    const tabcontent = document.getElementsByClassName("content");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    const tablinks = document.getElementsByClassName("tabs");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  let count = 0;
  let displayCount = document.getElementById("counts");
  let countButton = document.getElementById("tab2");
  countButton.onclick = function(){
      count++;
      displayCount.textContent =  "Events " + count;
    }
      window.addEventListener("keydown", (event) => {
        if(event.key === "2") {
            count++;
        displayCount.textContent =  "Events " + count;
        }
      })
    