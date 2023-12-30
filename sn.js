window.addEventListener('scroll', function () {
  // Change the scroll speed factor for each element
  const sc = window.scrollY;
  var npn= this.document.querySelector('#myname');
  // Apply the transform with different speed factors
  
  npn.style.transform = `translateY(-50%) translateY(${sc * 0.5}px)`;
  console.log('DRA');
});









let currentMode = 1;
    const toggleElement = document.getElementById('mode');
    const mnd = document.getElementById('mainpage');
    const pt = document.querySelector('.moon');
    
    

    toggleElement.addEventListener('click', toggleMode);

    function toggleMode() {
        switch (currentMode) {
            case 1:
                toggleElement.textContent = 'WHITESPACE';
                toggleElement.style.color="navy";
                document.body.style.backgroundColor = "gainsboro";
                document.body.style.color = "navy";
                pt.style.stroke = "navy";
                

                

                // Add functionality for Mode 1
                break;
            
            case 2:
                toggleElement.textContent = 'DARKSPACE';
                toggleElement.style.color="magenta";
                document.body.style.backgroundColor = "black";
                document.body.style.color = "magenta";
                pt.style.stroke = "magenta";
                
                // Add functionality for Mode 3
                break;

    case 3:
                toggleElement.textContent = 'GOLD';
                toggleElement.style.color="gold";
                document.body.style.backgroundColor = "darkred";
                document.body.style.color = "gold";
                pt.style.stroke = "gold";
                
                // Add functionality for Mode 3
                break;


        }

        // Update current mode
        currentMode = currentMode === 3 ? 1 : currentMode + 1;
    }


//////

  //////
const options = { 
      root: null,
      threshold: 1 
}; 
  
const observer = new IntersectionObserver((entries) => {
  handleVisibility(entries[0].isIntersecting);
}, options);

const target = document.querySelector("#c1");
observer.observe(target);

function handleVisibility(isVisible) {
  if (isVisible) {
    console.log("Target Element is visible");
    target.style.opacity = 0.8 ;
    window.addEventListener('scroll', function () {
      // Change the scroll speed factor for each element
      const sc = window.scrollY;
    
      // Apply the transform with different speed factors
      
      target.style.transform = `translateY(-50%) translateY(${sc * 0.5}px)`;
      console.log('poda');
    });
    
  } else {
    console.log("Target Element is not visible");
    target.style.opacity = 0.1;
  }
}

