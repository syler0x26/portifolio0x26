document.addEventListener("DOMContentLoaded", () => {

  const section = document.getElementById("cubeSection");
  const square = document.getElementById("cubeSquare");

  const textLeft = document.getElementById("cubeTextLeft");
  const textRight = document.getElementById("cubeTextRight");

  if (!section || !square) return;

  window.addEventListener("scroll", () => {

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    let progress = (vh - rect.top) / (vh + rect.height);
    progress = Math.max(0, Math.min(1, progress));

    /* =========================
       FASE 1 — desce
    ========================= */
    if (progress < 0.3) {
      const p = progress / 0.3;

      const y = -200 + p * 200;

      square.style.transform = `
        translate(-50%, -50%)
        translateY(${y}px)
      `;
    }

    /* =========================
       FASE 2 — textos aparecem
    ========================= */
    else if (progress < 0.6) {
      const p = (progress - 0.3) / 0.3;

      square.style.transform = `
        translate(-50%, -50%)
      `;

      textLeft.style.opacity = p;
      textRight.style.opacity = p;
    }

    /* =========================
       FASE 3 — cresce e transiciona
    ========================= */
    else {
      const p = (progress - 0.6) / 0.4;

      const scale = 1 + p * 25;

      square.style.transform = `
        translate(-50%, -50%)
        scale(${scale})
      `;
    }

  });

});