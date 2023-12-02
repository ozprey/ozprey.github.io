gsap.to(".lpo",{
  duration:3,
  scale:0.8,
  repeat:-1,
  yoyo:true,
  stagger: {
    each:0.5,
    from: "center",
  }
}
)
//SCROLL REVEAL
ScrollReveal().reveal('p',{delay:200,origin      : 'bottom',
distance    : '10px',
duration    : 1000,
opacity     : 0,
easing      : 'linear',
reset       : false
});



// GSAP CIRCLE //
let circle = gsap.timeline({
  scrollTrigger: {
    trigger: ".cl",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    pin: ".f1",
    //markers: { startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20 }
  }
})
circle.to(".cl", { scale: 18 });
//GSAP-TEXT//
let texty = gsap.timeline({
  scrollTrigger: {
    trigger: ".g2",
    start: "center center",
    end: "center center",
    scrub: 1,
    //markers: { startColor: "brown", endColor: "brown", fontSize: "18px", fontWeight: "normal", indent: 90 }
  }
})
texty.from("#mmm", { opacity:0});
texty.from("#dl", { opacity:0});
texty.from("#hm", { opacity:0});
texty.from("#bs", { opacity:0});
texty.from("#tm", { opacity:0});





//VIVIUS
new Vivus('canvas', { start: 'autostart', type: 'sync', duration: 100 });

//ANIME
var rnm = document.querySelector('#ea');
var lnm = document.querySelector('#nu');

anime({
  targets: rnm,lnm,
  innerHTML: [0, 76.9366],
  easing: 'linear',
  round: 10 ,
  duration:5000,
  loop: false,
  direction: 'alternate',
});
anime({
  targets:lnm,
  innerHTML: [0, 8.5241],
  easing: 'easeInOutExpo',
  round: 10 ,
  duration:5000,
  loop: false,
  direction: 'alternate',
});
////DARK SPACE
var dark=document.querySelector('.g1f2');



//event listener function
dark.addEventListener("change",()=> {
  document.body.classList.toggle("dk")
});