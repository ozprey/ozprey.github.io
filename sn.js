
  
const options = { 
      root: null,
      
      threshold: 1 
}; 
  
const observer = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) { 
    console.log("Target Element is visible"); 
    target.style.opacity=1;
    


} else { 
    console.log("Target Element is not visible"); 
    target.style.opacity=0.1;
   


} }
, options); 
  
const target = document.querySelector("#c1"); 

observer.observe(target); 
  