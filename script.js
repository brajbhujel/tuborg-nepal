const tl = gsap.timeline();

tl.to("#bottle ", {
  rotate: -15,
  y: 600,
  x: 100,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#page2",
    start: "0% 100%",
    end: "20% 50%",
    scrub: 2,
    markers: true,
  },
});

tl.to("#page1_ice ", {
  y: 700,
  x: -150,
  rotate: 5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#page2",
    start: "0% 100%",
    end: "20% 50%",
    scrub: 2,
    markers: true,
  },
});

tl.to("#page1_leaf ", {
  top: "100%",
  left: "15%",
  rotate: 5,
  scrollTrigger: {
    trigger: "#page2",
    start: "0% 100%",
    end: "20% 50%",
    scrub: 2,
    markers: true,
  },
});

tl.to("#page1_leaf2 ", {
  top: "160%",
  left: "70%",
  rotate: 150,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#page2",
    start: "0% 100%",
    end: "50% 50%",
    scrub: 2,
    markers: true,
  },
});

tl.to("#bottle ", {
  top: "110%",
  left: "30%",
  rotate: -60,
  scale: 1.2,
  scrollTrigger: {
    trigger: "#page3",
    start: "5% 100%",
    end: "50% 50%",
    scrub: 2,
    markers: true,
  },
});

tl.to("#page1_leaf ", {
  top: "235%",
  left: "50%",
  rotate: 110,
  scrollTrigger: {
    trigger: "#page3",
    start: "5% 100%",
    end: "50% 50%",
    scrub: 2,
    markers: true,
  },
});
