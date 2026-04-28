document.querySelectorAll(".project-card").forEach(card => {
  const canvas = card.querySelector(".card-paint");
  const ctx = canvas.getContext("2d");

  let rect;

  function resize() {
    rect = card.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  resize();
  window.addEventListener("resize", resize);

  let particles = [];

  card.addEventListener("mousemove", (e) => {
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    particles.push({
      x,
      y,
      size: Math.random() * 6 + 3,
      alpha: 1,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1
    });
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;

      ctx.fillStyle = `rgba(198,247,0,${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      if (p.alpha <= 0) {
        particles.splice(i, 1);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
});