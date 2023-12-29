new Vivus('svgsign', { start: 'inViewport', type: 'sync', delay:100, duration: 200});

ScrollReveal().reveal('#myname');
ScrollReveal().reveal('.tagg');
ScrollReveal().reveal('.di', { delay: 1000 });



// GSAP

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
      markers: { startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 }
    }
  })
  circle.from(".tagline", { scale: 1,translateX:-500, opacity:0, color:'blue' });






  //textillate

  $('#myname').textillate({ 
    autoStart: true,
    loop: true,
    in : { effect: 'flash', shuffle: true , 
    delayScale: 1.5, 
    delay: 100},
    out : { effect: 'flash',shuffle: true }
});

  $('.spn').textillate({ 
    autoStart: true,
    loop: true,
    minDisplayTime: 7000,
    initialDelay: 50,
    in : { effect: 'bounceInRight', shuffle: true , 
    delayScale: 1.5, 
    delay: 100},
    out : { effect: 'bounceOutLeft',shuffle: true }
});


