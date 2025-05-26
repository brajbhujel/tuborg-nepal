function show() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

show();

gsap.to("#bottle", {
  rotate: -15,
  scale: 0.6,
  scrollTrigger: {
    trigger: "#bottle",
    scroller: "#main",
    start: "top 5%",
    endTrigger: "#page5",
    end: "bottom bottom",
    scrub: true,
    pin: true,
  },
});

let t1 = gsap.timeline();
t1.from("#main #page1_capsule", {
  opacity: 0,
  scale: 0.1,
});

t1.from(
  "#bottle",
  {
    opacity: 0,
    scale: 0.2,
    duration: 2.5,
    ease: "bounce.out",
  },
  "<"
); // "<" means start at the same time as previous

// Animate nav bar (keep as load animation)
gsap.from("#nav_top", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// Animate page1 content (except bottle and capsule, already animated)
gsap.from("#page1 h1", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 70%",
  },
});

// Animate page2 parts
gsap.from("#page2_part1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2_part1",
    scroller: "#main",
    start: "top 80%",
  },
});
gsap.from("#page2_part2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2_part2",
    scroller: "#main",
    start: "top 80%",
  },
});
gsap.from("#page2_part1 h1, #page2_part1 p, #page2_part1 button", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2_part1",
    scroller: "#main",
    start: "top 75%",
  },
});
gsap.from("#page2_part2 > *", {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page2_part2",
    scroller: "#main",
    start: "top 75%",
  },
});

// Animate page3
gsap.from("#page3 h1", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    start: "top 80%",
  },
});
gsap.from("#page3_text_part1", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3_text_part1",
    scroller: "#main",
    start: "top 85%",
  },
});
gsap.from("#page3_text_part2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page3_text_part2",
    scroller: "#main",
    start: "top 85%",
  },
});
gsap.from(
  "#page3_text_part1 h5, #page3_text_part2 h5, #page3_text_part2 h2, #page3_text_part2 p",
  {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page3_text_part2",
      scroller: "#main",
      start: "top 80%",
    },
  }
);

// Animate page5
gsap.from("#page5 h5, #page5 h1", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    start: "top 80%",
  },
});
gsap.from("#page5_image_box > div", {
  opacity: 0,
  y: 60,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#page5_image_box",
    scroller: "#main",
    start: "top 85%",
  },
});

gsap.to("#page6 h1", {
  transform: "translateX(-155%)",
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page7 h1", {
  xPercent: -75,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});
