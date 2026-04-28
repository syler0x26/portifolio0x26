const section = document.querySelector(".scroll-text");
const fill = document.querySelector(".scroll-text__fill");

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  const start = sectionTop - windowHeight;
  const end = sectionTop + sectionHeight - windowHeight;


  let progress = (scrollY - start) / (end - start);

  progress = Math.max(0, Math.min(1, progress));

  fill.style.width = `${progress * 100}%`;
});