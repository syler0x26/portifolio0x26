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

  const translations = {
    pt: {
      nav_about: "Sobre mim",
      nav_projects: "Projetos",
      nav_timeline: "Trajetoria",
      home_title: "Portf\u00f3lio Acad\u00eamico em <span>Intelig\u00eancia Artificial</span>",
      home_btn_work: "ver meu trabalho",
      home_btn_contact: "meu contato",
      courses_title: "Cursos",
      courses_subtitle: "Programas focados em tecnologia, programacao e inteligencia artificial.",
      course_ai: "Inteligencia Artificial",
      course_python: "Python",
      label_soon: "Em breve",
      about_title: "Quem sou eu",
      about_role: "Estudante de Bacharelado em Intelig\u00eancia Artificial \u00b7 Brasil",
      about_summary:
        "Foco em construir solu\u00e7\u00f5es inteligentes orientadas a dados, com base s\u00f3lida em matem\u00e1tica e ci\u00eancia da computa\u00e7\u00e3o. Interesse em aplicar IA para resolver problemas reais e gerar impacto mensur\u00e1vel.",
      tag_ml: "Machine Learning",
      tag_dl: "Deep Learning",
      tag_data: "An\u00e1lise de Dados",
      tag_auto: "Automa\u00e7\u00e3o",
      tag_python: "Python",
      metric_academic: "Projetos acad\u00eamicos",
      metric_extension: "Projetos de extens\u00e3o",
      metric_competitions: "Competi\u00e7\u00f5es tecnol\u00f3gicas",
      atom_ml_title: "Machine Learning",
      atom_ml_desc: "Algoritmos que aprendem com dados",
      atom_ai_title: "Intelig\u00eancia Artificial",
      atom_ai_desc: "Explorando dados e sistemas inteligentes",
      timeline_title: "Trajetoria",
      timeline_subtitle: "Minha jornada profissional.",
      timeline_2020_title: "Inicio na tecnologia - 2020",
      timeline_2020_desc: "Curiosidade por computacao e primeiros estudos em programacao.",
      timeline_2024_title: "Primeiro projeto web - 2024",
      timeline_2024_desc: "Construindo interfaces e aprendendo fundamentos de desenvolvimento web.",
      timeline_2026_title: "Ingresso na universidade - 2026",
      timeline_2026_desc: "Base teorica forte e disciplinas de Inteligencia artificial.",
      timeline_ai_title: "Estudos em inteligencia artificial",
      timeline_ai_desc: "Foco em aprendizado de maquina, redes neurais e dados.",
      timeline_projects_title: "Desenvolvimento de projetos academicos",
      timeline_projects_desc: "Aplicando IA para resolver problemas reais e validar ideias.",
      portfolio_title: "Projetos e Experimentos",
      portfolio_subtitle: "Projetos desenvolvidos durante minha jornada acad\u00eamica em tecnologia e Intelig\u00eancia Artificial.",
      project_data_title: "An\u00e1lise de Dados com Python",
      project_data_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_ml_title: "Modelo de Machine Learning",
      project_ml_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet.",
      project_nn_title: "Experimentos com Redes Neurais",
      project_nn_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_viz_title: "Visualiza\u00e7\u00e3o de Dados",
      project_viz_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_auto_title: "Projeto de Automa\u00e7\u00e3o",
      project_auto_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_algo_title: "Estudo de Algoritmos",
      project_algo_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_btn: "Ver Projeto",
      connect_badge: "CONECTE-SE",
      connect_title: "<span>Hey!!</span> Acompanhe minha jornada na tecnologia",
      connect_desc:
        "Estou construindo projetos, aprendendo e evoluindo na area de tecnologia e desenvolvimento. Se voce quer acompanhar essa jornada e ver os projetos que estou criando, me segue nas redes sociais.",
      social_instagram: "Instagram",
      social_github: "GitHub",
      social_linkedin: "LinkedIn",
      support_title: "Apoie o <span>Projeto</span>",
      support_desc:
        "Se voce acredita no projeto e quer ajudar no crescimento dessa jornada na tecnologia, pode apoiar abaixo.",
      support_pix_title: "Doar via Pix",
      support_pix_desc: "Seu apoio ajuda a manter a jornada ativa e a construir novos projetos.",
      support_pix_scan: "Escaneie para doar",
      support_pix_copy_title: "Copiar chave Pix",
      support_pix_copy_btn: "Copiar chave",
      pix_copied: "Chave copiada",
      pix_manual: "Copie manualmente",
      alt_creator: "img ilustrativa do criador do site",
      alt_timeline_2020: "Inicio na tecnologia",
      alt_timeline_2024: "Primeiro projeto web",
      alt_timeline_ai: "Estudos em inteligencia artificial",
      alt_timeline_projects: "Desenvolvimento de projetos academicos",
      alt_project_data: "An\u00e1lise de Dados com Python",
      alt_project_ml: "Modelo de Machine Learning",
      alt_project_nn: "Experimentos com Redes Neurais",
      alt_project_viz: "Visualiza\u00e7\u00e3o de Dados",
      alt_project_auto: "Projeto de Automa\u00e7\u00e3o",
      alt_project_algo: "Estudo de Algoritmos"
    },
    en: {
      nav_about: "About me",
      nav_projects: "Projects",
      nav_timeline: "Timeline",
      home_title: "Academic Portfolio in <span>Artificial Intelligence</span>",
      home_btn_work: "see my work",
      home_btn_contact: "my contact",
      courses_title: "Courses",
      courses_subtitle: "Programs focused on technology, programming, and artificial intelligence.",
      course_ai: "Artificial Intelligence",
      course_python: "Python",
      label_soon: "Coming soon",
      about_title: "About me",
      about_role: "BSc Student in Artificial Intelligence \u00b7 Brazil",
      about_summary:
        "Focused on building data-driven intelligent solutions with a solid foundation in math and computer science. Interested in applying AI to solve real problems and create measurable impact.",
      tag_ml: "Machine Learning",
      tag_dl: "Deep Learning",
      tag_data: "Data Analysis",
      tag_auto: "Automation",
      tag_python: "Python",
      metric_academic: "Academic projects",
      metric_extension: "Extension projects",
      metric_competitions: "Tech competitions",
      atom_ml_title: "Machine Learning",
      atom_ml_desc: "Algorithms that learn from data",
      atom_ai_title: "Artificial Intelligence",
      atom_ai_desc: "Exploring data and intelligent systems",
      timeline_title: "Timeline",
      timeline_subtitle: "My professional journey.",
      timeline_2020_title: "Start in technology - 2020",
      timeline_2020_desc: "Curiosity for computing and first steps in programming.",
      timeline_2024_title: "First web project - 2024",
      timeline_2024_desc: "Building interfaces and learning web development fundamentals.",
      timeline_2026_title: "University admission - 2026",
      timeline_2026_desc: "Strong theoretical base and AI-focused coursework.",
      timeline_ai_title: "Artificial intelligence studies",
      timeline_ai_desc: "Focus on machine learning, neural networks, and data.",
      timeline_projects_title: "Academic project development",
      timeline_projects_desc: "Applying AI to solve real problems and validate ideas.",
      portfolio_title: "Projects and Experiments",
      portfolio_subtitle: "Projects developed during my academic journey in technology and Artificial Intelligence.",
      project_data_title: "Data Analysis with Python",
      project_data_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_ml_title: "Machine Learning Model",
      project_ml_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet.",
      project_nn_title: "Neural Network Experiments",
      project_nn_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_viz_title: "Data Visualization",
      project_viz_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_auto_title: "Automation Project",
      project_auto_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_algo_title: "Algorithms Study",
      project_algo_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_btn: "View Project",
      connect_badge: "CONNECT",
      connect_title: "<span>Hey!!</span> Follow my journey in tech",
      connect_desc:
        "I am building projects, learning, and evolving in technology and development. If you want to follow this journey and see what I am creating, connect with me on social media.",
      social_instagram: "Instagram",
      social_github: "GitHub",
      social_linkedin: "LinkedIn",
      support_title: "Support the <span>Project</span>",
      support_desc:
        "If you believe in the project and want to help this journey grow in tech, you can support below.",
      support_pix_title: "Donate via Pix",
      support_pix_desc: "Your support helps keep the journey active and build new projects.",
      support_pix_scan: "Scan to donate",
      support_pix_copy_title: "Copy Pix key",
      support_pix_copy_btn: "Copy key",
      pix_copied: "Key copied",
      pix_manual: "Copy manually",
      alt_creator: "illustrative image of the site creator",
      alt_timeline_2020: "Start in technology",
      alt_timeline_2024: "First web project",
      alt_timeline_ai: "Artificial intelligence studies",
      alt_timeline_projects: "Academic project development",
      alt_project_data: "Data Analysis with Python",
      alt_project_ml: "Machine Learning Model",
      alt_project_nn: "Neural Network Experiments",
      alt_project_viz: "Data Visualization",
      alt_project_auto: "Automation Project",
      alt_project_algo: "Algorithms Study"
    },
    es: {
      nav_about: "Sobre m\u00ed",
      nav_projects: "Proyectos",
      nav_timeline: "Trayectoria",
      home_title: "Portafolio Acad\u00e9mico en <span>Inteligencia Artificial</span>",
      home_btn_work: "ver mi trabajo",
      home_btn_contact: "mi contacto",
      courses_title: "Cursos",
      courses_subtitle: "Programas enfocados en tecnolog\u00eda, programaci\u00f3n e inteligencia artificial.",
      course_ai: "Inteligencia Artificial",
      course_python: "Python",
      label_soon: "Pr\u00f3ximamente",
      about_title: "Sobre m\u00ed",
      about_role: "Estudiante de Licenciatura en Inteligencia Artificial \u00b7 Brasil",
      about_summary:
        "Enfocado en construir soluciones inteligentes orientadas a datos, con una base s\u00f3lida en matem\u00e1tica y ciencias de la computaci\u00f3n. Interesado en aplicar IA para resolver problemas reales y generar impacto medible.",
      tag_ml: "Machine Learning",
      tag_dl: "Deep Learning",
      tag_data: "An\u00e1lisis de Datos",
      tag_auto: "Automatizaci\u00f3n",
      tag_python: "Python",
      metric_academic: "Proyectos acad\u00e9micos",
      metric_extension: "Proyectos de extensi\u00f3n",
      metric_competitions: "Competiciones tecnol\u00f3gicas",
      atom_ml_title: "Machine Learning",
      atom_ml_desc: "Algoritmos que aprenden con datos",
      atom_ai_title: "Inteligencia Artificial",
      atom_ai_desc: "Explorando datos y sistemas inteligentes",
      timeline_title: "Trayectoria",
      timeline_subtitle: "Mi trayectoria profesional.",
      timeline_2020_title: "Inicio en la tecnolog\u00eda - 2020",
      timeline_2020_desc: "Curiosidad por la computaci\u00f3n y primeros estudios en programaci\u00f3n.",
      timeline_2024_title: "Primer proyecto web - 2024",
      timeline_2024_desc: "Construyendo interfaces y aprendiendo fundamentos del desarrollo web.",
      timeline_2026_title: "Ingreso a la universidad - 2026",
      timeline_2026_desc: "Base te\u00f3rica fuerte y asignaturas de inteligencia artificial.",
      timeline_ai_title: "Estudios en inteligencia artificial",
      timeline_ai_desc: "Enfoque en aprendizaje autom\u00e1tico, redes neuronales y datos.",
      timeline_projects_title: "Desarrollo de proyectos acad\u00e9micos",
      timeline_projects_desc: "Aplicando IA para resolver problemas reales y validar ideas.",
      portfolio_title: "Proyectos y Experimentos",
      portfolio_subtitle: "Proyectos desarrollados durante mi trayectoria acad\u00e9mica en tecnolog\u00eda e Inteligencia Artificial.",
      project_data_title: "An\u00e1lisis de Datos con Python",
      project_data_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_ml_title: "Modelo de Machine Learning",
      project_ml_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet.",
      project_nn_title: "Experimentos con Redes Neuronales",
      project_nn_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_viz_title: "Visualizaci\u00f3n de Datos",
      project_viz_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_auto_title: "Proyecto de Automatizaci\u00f3n",
      project_auto_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_algo_title: "Estudio de Algoritmos",
      project_algo_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet",
      project_btn: "Ver Proyecto",
      connect_badge: "CONECTA",
      connect_title: "<span>Hey!!</span> Acompa\u00f1a mi camino en tecnolog\u00eda",
      connect_desc:
        "Estoy construyendo proyectos, aprendiendo y evolucionando en tecnolog\u00eda y desarrollo. Si quieres acompa\u00f1ar este camino y ver lo que estoy creando, s\u00edgueme en las redes sociales.",
      social_instagram: "Instagram",
      social_github: "GitHub",
      social_linkedin: "LinkedIn",
      support_title: "Apoya el <span>Proyecto</span>",
      support_desc:
        "Si crees en el proyecto y quieres ayudar a que esta jornada crezca en tecnolog\u00eda, puedes apoyar abajo.",
      support_pix_title: "Donar via Pix",
      support_pix_desc: "Tu apoyo ayuda a mantener la jornada activa y a construir nuevos proyectos.",
      support_pix_scan: "Escanea para donar",
      support_pix_copy_title: "Copiar clave Pix",
      support_pix_copy_btn: "Copiar clave",
      pix_copied: "Clave copiada",
      pix_manual: "Copia manualmente",
      alt_creator: "imagen ilustrativa del creador del sitio",
      alt_timeline_2020: "Inicio en la tecnolog\u00eda",
      alt_timeline_2024: "Primer proyecto web",
      alt_timeline_ai: "Estudios en inteligencia artificial",
      alt_timeline_projects: "Desarrollo de proyectos acad\u00e9micos",
      alt_project_data: "An\u00e1lisis de Datos con Python",
      alt_project_ml: "Modelo de Machine Learning",
      alt_project_nn: "Experimentos con Redes Neuronales",
      alt_project_viz: "Visualizaci\u00f3n de Datos",
      alt_project_auto: "Proyecto de Automatizaci\u00f3n",
      alt_project_algo: "Estudio de Algoritmos"
    }
  };

  let currentLang = "pt";
  const translate = (key) => {
    const pack = translations[currentLang] || translations.pt;
    return pack[key] || translations.pt[key] || key;
  };

  const applyLanguage = (lang) => {
    currentLang = translations[lang] ? lang : "pt";
    const pack = translations[currentLang];
    document.documentElement.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = pack[key];
      if (value === undefined) return;

      if (el.dataset.i18nAttr) {
        el.setAttribute(el.dataset.i18nAttr, value);
        return;
      }

      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = value;
        return;
      }

      el.textContent = value;
    });

    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
    });

    try {
      window.localStorage.setItem("site_lang", currentLang);
    } catch (error) {
      // ignore storage errors
    }
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  if (langButtons.length) {
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang);
      });
    });
  }

  const savedLang = (() => {
    try {
      return window.localStorage.getItem("site_lang");
    } catch (error) {
      return null;
    }
  })();
  applyLanguage(savedLang || "pt");

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
          showFeedback(translate("pix_copied"));
        } catch (error) {
          showFeedback(translate("pix_manual"));
        }
      });
    });
  }

})();
