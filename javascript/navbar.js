const navbarAnimation = gsap.timeline({});
// navbarAnimation.to(".navbar-name", {rotationY: 90, rotation: 360, duration: .5});
// navbarAnimation.to(".navbar-name", {transform: "rotateY(180deg)", duration: 1});
navbarAnimation.to(".navbar-name", {innerHTML: 'RARNIE MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'RORNIE MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMNIE MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMAIE MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANE MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANC MORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCE ORCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER RCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER ZCOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER ZOOMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER ZOMMBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER ZOMBBE', duration: .05 });
navbarAnimation.to(".navbar-name", {innerHTML: 'ROMANCER ZOMBIE', duration: .05 });
// navbarAnimation.to(".navbar-name", {rotationY: 0, rotation: 0, duration: .5});

navbarAnimation.pause();

const navbar = document.querySelector(".navbar-name-container")

navbar.addEventListener('mouseenter', function() {
  navbarAnimation.play();
}); 

navbar.addEventListener('mouseleave', function() {
  navbarAnimation.reverse();
}); 

const logoContainer = document.querySelector(".zarnie-logo-container");
const logoContent = document.querySelector(".navbar-content");
const logo = document.querySelector(".zarnie-logo");


logoContent.addEventListener('mouseenter', function() {
  logo.classList.add("hidden");
  logo.src = "../assets/logo/logo/Zarnie2a.png";
  logo.style.alignSelf = "center";
  setTimeout(function(){ 
  logo.classList.remove("hidden");
  }, 100);
}); 

logoContent.addEventListener('mouseleave', function() {
  logo.classList.add("hidden");
  logo.src = "../assets/logo/logo/Zarnie.png";
  logo.style.alignSelf = "flex-start";
  setTimeout(function(){ 
    logo.classList.remove("hidden");
    }, 100);
}); 

