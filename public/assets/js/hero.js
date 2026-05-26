const hero = document.getElementById("hero");
const content = document.querySelector(".hero__content");

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  const rotateX = y * 10;
  const rotateY = x * 10;

  content.style.transform = `
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    translateZ(20px)
  `;
});

hero.addEventListener("mouseleave", () => {
  content.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
    translateZ(0)
  `;
});

window.addEventListener("load", () => {

  const video = document.querySelector(".hero__video");

  video.addEventListener("canplaythrough", () => {
    video.style.opacity = "1";
  });

});