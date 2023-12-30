


// GSAP
gsap.to(".spn",{
  duration:3,
  scale:1.1,
  color:'grey',
  repeat:-1,
  yoyo:true,
  stagger: {
    each:0.5,
    from: "center",
  }
}
)
//////
gsap.registerPlugin(TextPlugin)
//replaces yourElement's text with "This is the new text" 
gsap.to("#c3", {
    duration: 5,
    repeat:-1,
    text: {
        value:"T <br> Y <br> P <br> O <br> G <br> R <br> A <br> P <br> H <br> Y ",
        ease: "circ.inOut",
        yoyoease: "circ.inOut"
    }
  });
gsap.to("#c6", {
    duration: 5,
    repeat:-1,
    text: {
        value:"W <br> E <br> B <br> I <br> N <br> T <br> E <br> R <br> F <br> A <br> C <br> E ",
        ease: "easein",
    }
  });
  gsap.to("#f5", {
    duration: 5,
    repeat:-1,
    text: {
        value:"             <br><br><br><br>  J <br> A <br> V <br> A <br> S <br> C  <br> R <br> I <br> P <br> T  ",
        ease: "easein",
    }
  });


  let circle = gsap.timeline({
    scrollTrigger: {
      trigger: ".tagg",
      start: "top center",
      end: "10px center",
      scrub: 1,
      pin: "none",
      //markers: { startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 }
    }
  })
  circle.from(".tagline", { scale: 1,translateX:-500, opacity:0, color:'magenta' });






  
