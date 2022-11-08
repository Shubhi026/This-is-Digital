//swiper-js

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    // loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    
  });


  //locomotive-js


const scroller = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});


//nav pin

//page-1
var tl = gsap.timeline();

tl.from("#page1 h1, #line img", {
    opacity: 0,
    delay: 0.1,
    duration: 1
})


.from("#img1", {
    opacity: 0,
    delay: 0.1,
    duration: 1,
    y: 100
}, "-=1")

var img1 = document.querySelector("#img1");
var hover = gsap.to(img1, {
    y: -9,
    paused: true,
    duration:  .7,
    ease: "ease-in-out"
});

img1.addEventListener("mouseenter", 
() => hover.play());

img1.addEventListener("mouseleave", 
() => hover.reverse());

tl.from("#img2", {
    opacity: 0,
    delay: 0.1,
    duration: 1,
    x: 100
}, "-=1")


var img2 = document.querySelector("#img2");
var hover2 = gsap.to(img2, {
    y: -6.5,
    paused: true,
    duration:  .6,
    ease: "ease-in-out"
});

img2.addEventListener("mouseenter", 
() => hover2.play());

img2.addEventListener("mouseleave", 
() => hover2.reverse());

tl.from("#img3", {
    opacity: 0,
    delay: 0.1,
    duration: 1,
    y: -100
}, "-=1")

var img3 = document.querySelector("#img3");
var hover3 = gsap.to(img3, {
    y: 6.5,
    paused: true,
    duration:  .6,
    ease: "ease-in-out"
});

img2.addEventListener("mouseenter", 
() => hover3.play());

img2.addEventListener("mouseleave", 
() => hover3.reverse());

var hover4 = gsap.to(img3, {
    y: -6.5,
    paused: true,
    duration:  .6,
    ease: "ease-in-out"
});

img3.addEventListener("mouseenter", 
() => hover4.play());

img3.addEventListener("mouseleave", 
() => hover4.reverse());

//page-2
gsap.from("#page2>h3",{
    scrollTrigger: {
        trigger: "#page2 h3",
        scroller: "#main",
        start: "top 100%", 
        // markers: true,
        
    },
    y: 70,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})
gsap.from("#page2 h1, #circ",{
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 100%",
        // markers: true,
        
    },
    y: 50,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})
gsap.from("#fin",{
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "#main",
        start: "top 75%",
        // markers: true,
        
    },
    y: 70,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})

//page-3
gsap.from("#h img, #i img",{
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 85%",
        
    },
    y: 100,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})

gsap.from("#text h1,#lin img, #text h4",{
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 60%",
        
    },
    y: 100,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})
gsap.from("#serv",{
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 15%",
        
    },
    y: 50,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})

//page-4
gsap.from("#page4 h1, #cir img",{
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 80%",
        
    },
    y: 70,
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})
gsap.from("#box",{
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 40%",
        
    },
    ease: Expo.easeInOut,
    opacity:0,
    duration : 1.5,  
})

//page-5

gsap.from("#page5 #boks",{
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 90%",
        
    },
    opacity:0,
    y: 100,
    ease: Expo.easeInOut,
    duration : 1.5,  
})
gsap.from("#page5 #ser",{
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 70,
    ease: Expo.easeInOut,
    duration : 1.5,  
})

//page-7
gsap.from("#page7 #low .ek:nth-child(1)",{
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 80,
    ease: Expo.easeInOut,
    duration : 1.2,  
})
gsap.from("#page7 #low .ek:nth-child(2)",{
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 70,
    ease: Expo.easeInOut,
    duration : 1.3,  
})
gsap.from("#page7 #low .ek:nth-child(3)",{
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 60,
    ease: Expo.easeInOut,
    duration : 1.4,  
})
gsap.from("#page7 #low .ek:nth-child(4)",{
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 50,
    ease: Expo.easeInOut,
    duration : 1.5,  
})
gsap.from("#page7 #low .ek:nth-child(5)",{
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 40%",
        
    },
    opacity:0,
    y: 40,
    ease: Expo.easeInOut,
    duration : 1.6,  
})

//responsive 

var flag = 0;
var nav = document.querySelector("#part2")
var menu = document.querySelector("#menu-icon")
document.querySelector("#menu-icon").addEventListener("click",function () {
      if (flag===0) {
        nav.style.display = "block";
        menu.innerHTML = `<i class="ri-close-line"></i>`
        flag = 1
        
      } 
      else {
        nav.style.display = "none";
        menu.innerHTML = `<i class="ri-menu-3-line"></i>`
        flag = 0
      }
})  
