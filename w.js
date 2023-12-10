document.getElementById("toggle").addEventListener("click", function() {

    this.classList.toggle("on");
  
    document.getElementById("menu").style.display =(document.getElementById("menu").style.display === "block") ? "none" : "block";
    document.getElementById("ttx").style.display =(document.getElementById("ttx").style.display === "none") ? "block" : "none";

  
  });
//
window.onload = function() {
  // Hide the preloader after 3 seconds (adjust the time as needed)
  setTimeout(function() {
    document.getElementById('plt').style.opacity=0;
    document.getElementById('jxf').style.opacity=1;

}, 3000);
  console.log('hello');
};

//
new Vivus('cannvas', { start: 'autostart', type: 'sync', duration: 100 });

//
  let circle = gsap.timeline({
    scrollTrigger: {
      trigger: "#mnyy",
      start: "top center",
      end: "100px center",
      scrub: 2,
      pin: "none",
      //markers: { startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20 }
    }
  })
  circle.to("#mnyy", { scale: 40 });

  ////SCROLL REVEAL
ScrollReveal().reveal('.clb',{delay:0,origin      : 'bottom',
distance    : '10px',
duration    : 1000,
opacity     : 0,
easing      : 'linear',
reset       : false
});
