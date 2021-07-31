gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.matchMedia({
  "(min-width: 600px)": function() {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".div1",
        start: "top top",
        end: 6000,
        scrub: 1,
        pin: ".div1",
        // markers: {
        //   startColor: "red",
        //   endColor: "orange",
        //   fontSize: "3rem",  
        // }
      }
    })

    .to(".scroll-down-container", {
      opacity: 0, duration: .1, ease: Power0.easeNone
    }, 0)
    

    .to(".square0", {
      x: -((window.innerWidth*.9) + (document.querySelector(".square0").clientWidth))
    }, 0)
    
    
    .to(".square1", {
      x: ((window.innerWidth) + (document.querySelector(".square1").clientWidth)),
      rotate: 180
    })
    
    
    .to(".square2", {
      x: -((window.innerWidth)*.6)
    })
    .to(".square2", {
      x: 0
    })
    
    .to(".square3", {
      y: ((window.innerHeight*.4)+(document.querySelector(".square3").clientHeight)),
      rotateY: 360
    })
    .to(".square3", {
      y: 0
    })
    
    .to(".square4", {
      y: (-window.innerHeight*.7),
      rotateX: 360
    })
    
  }
})

ScrollTrigger.matchMedia({
  "(max-width: 599px)": function() {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".div1",
        start: "top top",
        end: 6000,
        scrub: 1,
        pin: ".div1",
        // markers: {
        //   startColor: "red",
        //   endColor: "orange",
        //   fontSize: "3rem",  
        // }
      }
    })

    .to(".scroll-down-container", {
      opacity: 0, duration: .1, ease: Power0.easeNone
    }, 0)

    .to(".square0", {
      x: -((window.innerWidth*.9) + (document.querySelector(".square0").clientWidth))
    }, 0)
    
    
    .to(".square1", {
      x: ((window.innerWidth) + (document.querySelector(".square1").clientWidth)),
      rotate: 180
    })
    
    
    .to(".square2", {
      x: -((window.innerWidth))
    })
    .to(".square2", {
      x: 0
    })
    
    .to(".square3", {
      y: ((window.innerHeight*.4)+(document.querySelector(".square3").clientHeight)),
      rotateY: 360
    })
    .to(".square3", {
      y: 0
    })
    .to(".square4", {
      y: (-window.innerHeight*.7),
      rotateX: 360
    })
    
  }
})

document.querySelector(".paintings-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: 180});
});

document.querySelector(".objects-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: 1110});
});

document.querySelector(".drawings-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: 2550});
});

document.querySelector(".books-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: 4100});
});

document.querySelector(".fashion-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 1.5, scrollTo: 6000});
});


// OLD CODE:

// gsap.to(".square", {
//   x: (window.innerWidth)/2,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".div2",
//     start: "top top",
//     // when top of trigger element (square) meets 80% down from top of viewport
//     end: "bottom 50%",
//     // end: () => `+=${document.querySelector(".square").offsetHeight*1.5}`,

//     scrub: true,
//     pin: ".div2",
    
//     // toggleActions: "restart reverse none none",
//     // play pause resume reverse restart reset complete none
//     // toggleActions: "onEnter onLeave onEnterBack onLeaveback"
//     markers: {
//       startColor: "purple",
//       endColor: "fuchsia",
//       fontSize: "3rem",
//     },
//     // toggleClass: "red"
//   }
// })

// gsap.fromTo(".square", {
//   x: (window.innerWidth)/2,
// }, {
//   x: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".div2",
//     start: "bottom 99.9%",
//     // when top of trigger element (square) meets 80% down from top of viewport
//     end: "bottom top",
//     // end: () => `+=${document.querySelector(".square").offsetHeight*1.5}`,

//     scrub: true,
//     pin: ".div2",
    
//     // toggleActions: "restart reverse none none",
//     // play pause resume reverse restart reset complete none
//     // toggleActions: "onEnter onLeave onEnterBack onLeaveback"
//     markers: {
//       startColor: "red",
//       endColor: "orange",
//       fontSize: "3rem",
//     },
//     // toggleClass: "red"
//   }
// });
