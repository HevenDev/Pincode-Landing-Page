const tl = gsap.timeline();

tl.from(".navbar", {
  y : "-100%",
  duration: 1,
  ease:"power1.out"
}, "home")
tl.from(".home-left-swiper", {
  x : "-100%",
  duration: 1,
  ease:"power1.out"
}, "home")
tl.from(".home-below-swiper", {
  x : "100%",
  duration: 1,
  ease:"power1.out"
}, "home")

gsap.from(".aboutUsContent", {
  y: 250,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".aboutUsContent",
    start: "-250 bottom",
    end: "bottom center",
  }
})

gsap.from(".aboutUsSwiper", {
  x: 250,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".aboutUsContent",
    start: "-250 bottom",
    end: "bottom center",
  }
})
gsap.from(".project-gsap-top", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger:true,
  scrollTrigger: {
    trigger: ".project-gsap-top",
    start: "top center",
    end: "bottom bottom",
  }
})
gsap.from(".projectSwiper", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".projectSwiper",
    start: "top 80%",
    end: "bottom bottom",
    
  }
})
gsap.from(".qoute_img_container_1", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".qoute_img_container_1",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".qoute_content", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".qoute_content",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".qoute_img_container_2", {
  scale: 0.7,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".qoute_img_container_2",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".contact_form_img", {
  scale: 0.7,
  x: "-100%",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact_form_img",
    start: "top 70%",
    end: "bottom bottom",
  }
})
gsap.from(".contact_form", {
  scale: 0.7,
  x: "100%",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact_form",
    start: "top 70%",
    end: "bottom bottom",
  }
})
gsap.from(".get_in_touch-heading", {
  y: "-50",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".get_in_touch-heading",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".get_in_touch-info", {
  width: "0",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".get_in_touch-info",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".get_in_touch_map", {
  x: "100%",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".get_in_touch_map",
    start: "top 80%",
    end: "bottom bottom",
  }
})
gsap.from(".fc", {
  y: "-100",
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".fc",
    start: "top top",
    end: "bottom bottom",
  }
})