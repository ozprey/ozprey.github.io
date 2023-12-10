document.getElementById("toggle").addEventListener("click", function() {

    this.classList.toggle("on");
  
    document.getElementById("menu").style.display =(document.getElementById("menu").style.display === "block") ? "none" : "block";
    document.getElementById("ttx").style.display =(document.getElementById("ttx").style.display === "none") ? "block" : "none";

  
  });
    


  let circle = gsap.timeline({
    scrollTrigger: {
      trigger: "#mnyy",
      start: "top center",
      end: "100px center",
      scrub: 1,
      pin: "none",
      markers: { startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20 }
    }
  })
  circle.to("#mnyy", { scale: 40 });
