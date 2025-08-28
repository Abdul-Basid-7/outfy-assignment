// script.js
let tl = gsap.timeline();

// Scene 1
tl.to(".scene1", { opacity: 1, duration: 0.7 })
  .to(".scene1", { opacity: 0, duration: 0.7, delay: 1 })
  .to(".scene2", { opacity: 1, duration: 0.7 });

// Function for 3-level animation
function animateImage(selector) {
  // First zoom-in (fast, to fullscreen, disappear)
  tl.to(selector, { opacity: 1, scale: 1.5, duration: 0.3, ease: "power2.out" })
    .to(selector, { scale: 3, opacity: 0, duration: 0.3, ease: "power2.in" });

  // Second zoom-in (fast, to fullscreen, disappear)
  tl.to(selector, { opacity: 1, scale: 1.5, duration: 0.3, ease: "power2.out" })
    .to(selector, { scale: 3, opacity: 0, duration: 0.3, ease: "power2.in" });

  // Third zoom-in (slow, appear clearly, then fullscreen & disappear)
  tl.to(selector, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }) // slow to normal size
    .to(selector, { scale: 3, opacity: 0, duration: 3, ease: "power2.in" });
}

// Apply to all images
animateImage(".scene2 .img:nth-child(1)");
animateImage(".scene2 .img:nth-child(2)");
animateImage(".scene2 .img:nth-child(3)");

tl.to(".scene2", { opacity: 0, duration: 1, delay: 1 })

  // Scene 4
  .to(".scene4", { opacity: 1, duration: 1 })
  .from(".scene4 h2", { y: -100, opacity: 0, duration: 1 });
