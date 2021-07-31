const animation = gsap.timeline({repeat:-1, repeatDelay: -.499});
animation.to(".foot-up", 0, {opacity: 1, stagger: -.5, ease: Power0.easeNone}, 0 );
animation.to(".foot-up", .5, {opacity: 0, stagger: -.5, ease: Power0.easeNone}, .5 );
animation.to(".foot-left", 0, {opacity: 1, stagger: -.5, ease: Power0.easeNone}, 3.5 );
animation.to(".foot-left", .5, {opacity: 0, stagger: -.5, ease: Power0.easeNone}, 4 );
animation.to(".foot-down", 0, {opacity: 1, stagger: .5, ease: Power0.easeNone}, 5 );
animation.to(".foot-down", .5, {opacity: 0, stagger: .5, ease: Power0.easeNone}, 5.5 );
animation.to(".foot-right", 0, {opacity: 1, stagger: .5, ease: Power0.easeNone}, 8.5 );
animation.to(".foot-right", .5, {opacity: 0, stagger: .5, ease: Power0.easeNone}, 9 );


 