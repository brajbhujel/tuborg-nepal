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
  duration: 1,
  scale: 0.1,
});

t1.from("#bottle", {
  opacity: 0,
  duration: 0.7,
  scale: 0.2,
});

gsap.to("#page6 h1", {
  transform: "translateX(-155%)",
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top 0%",
    end: "top -100%",
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
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
