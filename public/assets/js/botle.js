gsap.registerPlugin(ScrollTrigger);

const bottle = document.getElementById("bottleImg");
const texts = document.querySelectorAll(".bottle__text");

/* =========================
   ANIMAÇÃO PRINCIPAL
========================= */

gsap.timeline({
  scrollTrigger: {
    trigger: "#bottleSection",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
})

/* ENTRA DA ESQUERDA */
.to(bottle, {
  x: "150vw",
  duration: 1,
  ease: "none"
})

/* DESCE PRO CANTO */
.to(bottle, {
  x: "-30vw",
  y: "30vh",
  scale: 0.9,
  duration: 1,
  ease: "none"
});


/* =========================
   TEXTOS POR SCROLL
========================= */

function showText(index) {
  texts.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

ScrollTrigger.create({
  trigger: "#bottleSection",
  start: "top top",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {

    const p = self.progress;

    if (p < 0.33) {
      showText(0);
    } else if (p < 0.66) {
      showText(1);
    } else {
      showText(2);
    }

  }
});