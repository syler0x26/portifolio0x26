(() => {
  const header = document.querySelector("header");

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("is-shrunk");
      } else {
        header.classList.remove("is-shrunk");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const aboutSection = document.querySelector("#about");

  if (aboutSection) {
    const smallScreenQuery = window.matchMedia("(max-width: 788.98px)");
    let isListening = false;
    const updateAboutBg = () => {
      if (smallScreenQuery.matches) {
        aboutSection.classList.add("is-dark");
        return;
      }

      const rect = aboutSection.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const start = viewportH * 0.9;
      const end = viewportH * 0.2;
      const t = (start - rect.top) / (start - end);

      if (t >= 0.5) {
        aboutSection.classList.add("is-dark");
      } else {
        aboutSection.classList.remove("is-dark");
      }
    };

    const setAboutBgBehavior = () => {
      if (smallScreenQuery.matches) {
        if (isListening) {
          window.removeEventListener("scroll", updateAboutBg);
          isListening = false;
        }
        aboutSection.classList.add("is-dark");
        return;
      }

      if (!isListening) {
        window.addEventListener("scroll", updateAboutBg, { passive: true });
        isListening = true;
      }
      updateAboutBg();
    };

    window.addEventListener("resize", setAboutBgBehavior);
    if (smallScreenQuery.addEventListener) {
      smallScreenQuery.addEventListener("change", setAboutBgBehavior);
    } else if (smallScreenQuery.addListener) {
      smallScreenQuery.addListener(setAboutBgBehavior);
    }
    setAboutBgBehavior();
  }

  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    timelineItems.forEach((item) => observer.observe(item));
  }

  const aboutCounts = document.querySelectorAll(".about-count");
  if (aboutSection && aboutCounts.length) {
    const animateCount = (el) => {
      const target = Number(el.dataset.target || el.textContent.replace(/\D/g, "")) || 0;
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const base = Math.floor(target * eased);
        const jitterMax = Math.max(6, target + 6);
        const jitter = Math.floor(Math.random() * jitterMax);
        const value = progress < 0.9 ? jitter : base;
        el.textContent = `+${value}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `+${target}`;
        }
      };

      requestAnimationFrame(tick);
    };

    let hasAnimated = false;
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            aboutCounts.forEach(animateCount);
          }
        });
      },
      { threshold: 0.4 }
    );
    aboutObserver.observe(aboutSection);
  }

  const homeSection = document.querySelector("#home");
  const homeCanvas = homeSection?.querySelector(".hero-particles");

  if (homeSection && homeCanvas) {
    const ctx = homeCanvas.getContext("2d");
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const smallQuery = window.matchMedia("(max-width: 767.98px)");
    const shouldDisable = () => coarseQuery.matches || smallQuery.matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let mouse = { x: 0, y: 0, active: false };
    let rafId = null;
    let isActive = true;
    let isEnabled = false;
    let resizeHandler = null;
    let mouseMoveHandler = null;
    let mouseEnterHandler = null;
    let mouseLeaveHandler = null;
    let homeObserver = null;

    const resize = () => {
      const rect = homeSection.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      homeCanvas.width = width * dpr;
      homeCanvas.height = height * dpr;
      homeCanvas.style.width = `${width}px`;
      homeCanvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createNodes = () => {
      const count = coarseQuery.matches ? 30 : 50;
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 1.6 + Math.random() * 2,
          anchorX: x,
          anchorY: y,
          stuck: 0
        };
      });
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";

      const linkDist = 120;
      const linkDist2 = linkDist * linkDist;

      for (const node of nodes) {
        const ax = node.anchorX - node.x;
        const ay = node.anchorY - node.y;
        node.vx += ax * 0.0004;
        node.vy += ay * 0.0004;

        if (mouse.active && !coarseQuery.matches) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (1 - dist / 150) * 0.06;
            node.vx += dx * force * 0.01;
            node.vy += dy * force * 0.01;
            if (dist < 26 && node.stuck <= 0) {
              node.stuck = 10 + Math.random() * 18;
            }
          }
        }

        if (node.stuck > 0 && mouse.active) {
          node.x += (mouse.x - node.x) * 0.18;
          node.y += (mouse.y - node.y) * 0.18;
          node.stuck -= 1;
        } else {
          node.x += node.vx;
          node.y += node.vy;
        }

        node.vx *= 0.98;
        node.vy *= 0.98;

        if (node.x < -60) node.x = width + 60;
        if (node.x > width + 60) node.x = -60;
        if (node.y < -60) node.y = height + 60;
        if (node.y > height + 60) node.y = -60;
      }

      for (let i = 0; i < nodes.length; i++) {
        let links = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < linkDist2) {
            const dist = Math.sqrt(dist2);
            const alpha = 1 - dist / linkDist;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.8})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(56, 189, 248, 0.15)";
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            links += 1;
            if (links >= 4) break;
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(59, 130, 246, 0.95)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.95)";
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (isActive) {
        rafId = requestAnimationFrame(step);
      }
    };

    const start = () => {
      if (rafId) return;
      isActive = true;
      rafId = requestAnimationFrame(step);
    };

    const stop = () => {
      isActive = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const attach = () => {
      resize();
      createNodes();
      start();

      resizeHandler = () => {
        resize();
        createNodes();
      };
      window.addEventListener("resize", resizeHandler);

      if (!coarseQuery.matches) {
        mouseMoveHandler = (event) => {
          const rect = homeCanvas.getBoundingClientRect();
          mouse.x = event.clientX - rect.left;
          mouse.y = event.clientY - rect.top;
        };
        mouseEnterHandler = () => {
          mouse.active = true;
        };
        mouseLeaveHandler = () => {
          mouse.active = false;
        };
        homeSection.addEventListener("mousemove", mouseMoveHandler);
        homeSection.addEventListener("mouseenter", mouseEnterHandler);
        homeSection.addEventListener("mouseleave", mouseLeaveHandler);
      }

      homeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
            } else {
              stop();
            }
          });
        },
        { threshold: 0.1 }
      );
      homeObserver.observe(homeSection);
    };

    const detach = () => {
      stop();
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        resizeHandler = null;
      }
      if (mouseMoveHandler) {
        homeSection.removeEventListener("mousemove", mouseMoveHandler);
        homeSection.removeEventListener("mouseenter", mouseEnterHandler);
        homeSection.removeEventListener("mouseleave", mouseLeaveHandler);
        mouseMoveHandler = null;
        mouseEnterHandler = null;
        mouseLeaveHandler = null;
      }
      if (homeObserver) {
        homeObserver.disconnect();
        homeObserver = null;
      }
    };

    const setParticlesBehavior = () => {
      if (shouldDisable()) {
        if (isEnabled) {
          detach();
          isEnabled = false;
        }
        homeCanvas.style.display = "none";
        return;
      }

      homeCanvas.style.display = "";
      if (!isEnabled) {
        attach();
        isEnabled = true;
      } else {
        if (mouseMoveHandler && coarseQuery.matches) {
          homeSection.removeEventListener("mousemove", mouseMoveHandler);
          homeSection.removeEventListener("mouseenter", mouseEnterHandler);
          homeSection.removeEventListener("mouseleave", mouseLeaveHandler);
          mouseMoveHandler = null;
          mouseEnterHandler = null;
          mouseLeaveHandler = null;
        } else if (!mouseMoveHandler && !coarseQuery.matches) {
          mouseMoveHandler = (event) => {
            const rect = homeCanvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
          };
          mouseEnterHandler = () => {
            mouse.active = true;
          };
          mouseLeaveHandler = () => {
            mouse.active = false;
          };
          homeSection.addEventListener("mousemove", mouseMoveHandler);
          homeSection.addEventListener("mouseenter", mouseEnterHandler);
          homeSection.addEventListener("mouseleave", mouseLeaveHandler);
        }
        createNodes();
      }
    };

    const onMediaChange = () => {
      setParticlesBehavior();
    };

    if (coarseQuery.addEventListener) {
      coarseQuery.addEventListener("change", onMediaChange);
    } else if (coarseQuery.addListener) {
      coarseQuery.addListener(onMediaChange);
    }
    if (smallQuery.addEventListener) {
      smallQuery.addEventListener("change", onMediaChange);
    } else if (smallQuery.addListener) {
      smallQuery.addListener(onMediaChange);
    }

    setParticlesBehavior();
  }

  const zone = document.querySelector(".about-atom-zone");
  const zoneCanvas = zone?.querySelector(".zone-particles");

  if (zone && zoneCanvas) {
    const ctx = zoneCanvas.getContext("2d");
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const smallQuery = window.matchMedia("(max-width: 767.98px)");
    const shouldDisable = () => coarseQuery.matches || smallQuery.matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let mouse = { x: 0, y: 0, active: false };
    let rafId = null;
    let isActive = true;
    let isEnabled = false;
    let resizeHandler = null;
    let mouseMoveHandler = null;
    let mouseEnterHandler = null;
    let mouseLeaveHandler = null;
    let zoneObserver = null;

    const resizeZone = () => {
      const rect = zone.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      const dpr = 1;
      zoneCanvas.width = width * dpr;
      zoneCanvas.height = height * dpr;
      zoneCanvas.style.width = `${width}px`;
      zoneCanvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createZoneNodes = () => {
      const count = coarseQuery.matches ? 28 : 40;
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          size: 2 + Math.random() * 2,
          anchorX: x,
          anchorY: y
        };
      });
    };

    const stepZone = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";

      const linkDist = coarseQuery.matches ? 100 : 120;
      const linkDist2 = linkDist * linkDist;

      for (const node of nodes) {
        const ax = node.anchorX - node.x;
        const ay = node.anchorY - node.y;
        node.vx += ax * 0.0004;
        node.vy += ay * 0.0004;

        if (mouse.active && !coarseQuery.matches) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const radius = 180;
          if (dist < radius && dist > 0.1) {
            const force = (1 - dist / radius) * 1.2;
            node.vx += (dx / dist) * force * 0.06;
            node.vy += (dy / dist) * force * 0.06;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.98;
        node.vy *= 0.98;

        if (node.x < -60) node.x = width + 60;
        if (node.x > width + 60) node.x = -60;
        if (node.y < -60) node.y = height + 60;
        if (node.y > height + 60) node.y = -60;
      }

      for (let i = 0; i < nodes.length; i++) {
        let links = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < linkDist2) {
            const dist = Math.sqrt(dist2);
            const alpha = 1 - dist / linkDist;
            ctx.strokeStyle = `rgba(125, 211, 252, ${alpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(56, 189, 248, 0.15)";
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            links += 1;
            if (links >= 3) break;
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = "rgba(226, 232, 240, 0.9)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (isActive) {
        rafId = requestAnimationFrame(stepZone);
      }
    };

    const start = () => {
      if (rafId) return;
      isActive = true;
      rafId = requestAnimationFrame(stepZone);
    };

    const stop = () => {
      isActive = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const attach = () => {
      resizeZone();
      createZoneNodes();
      start();

      resizeHandler = () => {
        resizeZone();
        createZoneNodes();
      };
      window.addEventListener("resize", resizeHandler);

      if (!coarseQuery.matches) {
        mouseMoveHandler = (event) => {
          const rect = zoneCanvas.getBoundingClientRect();
          mouse.x = event.clientX - rect.left;
          mouse.y = event.clientY - rect.top;
        };
        mouseEnterHandler = () => {
          mouse.active = true;
        };
        mouseLeaveHandler = () => {
          mouse.active = false;
        };
        zone.addEventListener("mousemove", mouseMoveHandler);
        zone.addEventListener("mouseenter", mouseEnterHandler);
        zone.addEventListener("mouseleave", mouseLeaveHandler);
      }

      zoneObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
            } else {
              stop();
            }
          });
        },
        { threshold: 0.1 }
      );
      zoneObserver.observe(zone);
    };

    const detach = () => {
      stop();
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        resizeHandler = null;
      }
      if (mouseMoveHandler) {
        zone.removeEventListener("mousemove", mouseMoveHandler);
        zone.removeEventListener("mouseenter", mouseEnterHandler);
        zone.removeEventListener("mouseleave", mouseLeaveHandler);
        mouseMoveHandler = null;
        mouseEnterHandler = null;
        mouseLeaveHandler = null;
      }
      if (zoneObserver) {
        zoneObserver.disconnect();
        zoneObserver = null;
      }
    };

    const setParticlesBehavior = () => {
      if (shouldDisable()) {
        if (isEnabled) {
          detach();
          isEnabled = false;
        }
        zoneCanvas.style.display = "none";
        return;
      }

      zoneCanvas.style.display = "";
      if (!isEnabled) {
        attach();
        isEnabled = true;
      } else {
        if (mouseMoveHandler && coarseQuery.matches) {
          zone.removeEventListener("mousemove", mouseMoveHandler);
          zone.removeEventListener("mouseenter", mouseEnterHandler);
          zone.removeEventListener("mouseleave", mouseLeaveHandler);
          mouseMoveHandler = null;
          mouseEnterHandler = null;
          mouseLeaveHandler = null;
        } else if (!mouseMoveHandler && !coarseQuery.matches) {
          mouseMoveHandler = (event) => {
            const rect = zoneCanvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
          };
          mouseEnterHandler = () => {
            mouse.active = true;
          };
          mouseLeaveHandler = () => {
            mouse.active = false;
          };
          zone.addEventListener("mousemove", mouseMoveHandler);
          zone.addEventListener("mouseenter", mouseEnterHandler);
          zone.addEventListener("mouseleave", mouseLeaveHandler);
        }
        createZoneNodes();
      }
    };

    const onMediaChange = () => {
      setParticlesBehavior();
    };

    if (coarseQuery.addEventListener) {
      coarseQuery.addEventListener("change", onMediaChange);
    } else if (coarseQuery.addListener) {
      coarseQuery.addListener(onMediaChange);
    }
    if (smallQuery.addEventListener) {
      smallQuery.addEventListener("change", onMediaChange);
    } else if (smallQuery.addListener) {
      smallQuery.addListener(onMediaChange);
    }

    setParticlesBehavior();
  }

  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length) {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    projectCards.forEach((card) => projectObserver.observe(card));
  }

  const pixCopyButtons = document.querySelectorAll(".pix-copy");
  if (pixCopyButtons.length) {
    pixCopyButtons.forEach((button) => {
      const feedback = button.closest(".support-card")?.querySelector(".pix-feedback");
      const text = button.dataset.copyText || "";

      const showFeedback = (message) => {
        if (feedback) {
          feedback.textContent = message;
        }
        button.classList.add("is-copied");
        window.setTimeout(() => {
          button.classList.remove("is-copied");
        }, 900);
      };

      button.addEventListener("click", async () => {
        if (!text) return;
        try {
          await navigator.clipboard.writeText(text);
          showFeedback("Chave copiada");
        } catch (error) {
          showFeedback("Copie manualmente");
        }
      });
    });
  }

})();
