(() => {
  const header = document.querySelector('[data-js="header"]');
  const heroCanvas = document.getElementById("heroCanvas");
  const context = heroCanvas ? heroCanvas.getContext("2d") : null;

  let isHeaderScrolled = false;
  let scrollTicking = false;

  const applyHeaderState = () => {
    if (!header) {
      scrollTicking = false;
      return;
    }

    const shouldBeScrolled = (window.scrollY || window.pageYOffset || 0) > 50;

    if (shouldBeScrolled !== isHeaderScrolled) {
      header.classList.toggle("scrolled", shouldBeScrolled);
      isHeaderScrolled = shouldBeScrolled;
    }

    scrollTicking = false;
  };

  const onScroll = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(applyHeaderState);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  applyHeaderState();

  if (!heroCanvas || !context) {
    return;
  }

  const waveState = {
    width: 0,
    height: 0,
    dpr: 1,
    time: 0,
    animationId: 0
  };

  const waves = [
    { amplitude: 18, frequency: 0.009, speed: 0.9, alpha: 0.35, color: "143,93,255", offset: 0 },
    { amplitude: 24, frequency: 0.011, speed: 1.2, alpha: 0.42, color: "91,110,255", offset: 0.8 },
    { amplitude: 30, frequency: 0.013, speed: 1.45, alpha: 0.3, color: "54,216,255", offset: 1.6 },
    { amplitude: 36, frequency: 0.015, speed: 1.75, alpha: 0.26, color: "143,93,255", offset: 2.4 }
  ];

  const resizeCanvas = () => {
    const rect = heroCanvas.getBoundingClientRect();
    waveState.width = Math.max(rect.width, 1);
    waveState.height = Math.max(rect.height, 1);
    waveState.dpr = Math.min(window.devicePixelRatio || 1, 2);

    heroCanvas.width = Math.floor(waveState.width * waveState.dpr);
    heroCanvas.height = Math.floor(waveState.height * waveState.dpr);

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(waveState.dpr, waveState.dpr);
    context.lineCap = "round";
  };

  const drawWaves = () => {
    const { width, height } = waveState;
    context.clearRect(0, 0, width, height);

    waves.forEach((wave, index) => {
      context.beginPath();

      const baseline = height * 0.42 + index * (height * 0.045);

      for (let x = 0; x <= width; x += 8) {
        const y =
          baseline +
          Math.sin(x * wave.frequency + waveState.time * wave.speed + wave.offset) *
            wave.amplitude;

        if (x === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.strokeStyle = `rgba(${wave.color}, ${wave.alpha})`;
      context.lineWidth = 1.8 + index * 0.4;
      context.shadowBlur = 16;
      context.shadowColor = `rgba(${wave.color}, 0.35)`;
      context.stroke();
    });

    waveState.time += 0.02;
    waveState.animationId = window.requestAnimationFrame(drawWaves);
  };

  const onCanvasResize = () => {
    window.requestAnimationFrame(resizeCanvas);
  };

  window.addEventListener("resize", onCanvasResize, { passive: true });

  resizeCanvas();
  drawWaves();
})();
