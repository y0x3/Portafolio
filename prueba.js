// Inicializar fullPage.js
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true
});

tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "#000"
  },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: { enable: false, force: 60, smooth: 10 }
      },
      resize: true
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 }
    }
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.05,
        sync: true,
        startValue: "max",
        count: 1,
        destroy: "min"
      },
      value: {
        min: 0,
        max: 0.5
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  }
});

// Datos de ejemplo para los proyectos
const proyectos = [
  {
    titulo: "Ajedrez Ciego",
    desc: "variante de ajedrez con un modo diferente de acomodar las piezas.",
    tecnologias: [
      { nombre: "HTML", logo: "html5-brands-solid.svg" },
      { nombre: "CSS", logo: "css-brands.svg" },
      { nombre: "JavaScript", logo: "js-brands.svg" },
      { nombre: "Firebase", logo: "firebase.svg" }
    ],
    link: "https://ajedrez-ciego.vercel.app/",
    iframe: "https://ajedrez-ciego.vercel.app/"
  },
  {
    titulo: "Galeria Compartida",
    desc: "Sitio enfocado en galeria compartida para un evento social.",
    tecnologias: [
      { nombre: "HTML", logo: "html5-brands-solid.svg" },
      { nombre: "CSS", logo: "css-brands.svg" },
      { nombre: "JavaScript", logo: "js-brands.svg" },
      { nombre: "Cloudinary", logo: "cloudinary-svgrepo-com.svg" }
    ],
    link: "https://pag-eve-v2.vercel.app/",
    iframe: "https://pag-eve-v2.vercel.app/"
  },
  {
    titulo: "Palabras",
    desc: "mini juego local de escribir palabras que empiecen con la ultima letra de la palabra anterior.",
    tecnologias: [
      { nombre: "HTML", logo: "html5-brands-solid.svg" },
      { nombre: "CSS", logo: "css-brands.svg" },
      { nombre: "JavaScript", logo: "js-brands.svg" }
    ],
    link: "https://palabras-alpha.vercel.app/",
    iframe: "https://palabras-alpha.vercel.app/"
  }
];

// Mostrar/ocultar lista
document.getElementById("toggle-list").onclick = function() {
  document.getElementById("lista-proyectos").classList.toggle("oculto");
};

// Cambiar proyecto al seleccionar
document.querySelectorAll("#lista-proyectos li").forEach((li, idx) => {
  li.onclick = function() {
    document.querySelectorAll("#lista-proyectos li").forEach(el => el.classList.remove("selected"));
    li.classList.add("selected");
    const p = proyectos[idx];
    document.getElementById("proyecto-titulo").textContent = p.titulo;
    document.getElementById("proyecto-desc").textContent = p.desc;
    document.getElementById("proyecto-link").href = p.link;
    // Cambia el src del iframe
    document.getElementById("proyecto-iframe").src = p.iframe;
    // Tecnologías (puedes usar imágenes aquí si quieres)
    const techDiv = document.getElementById("proyecto-tecnologias");
    techDiv.innerHTML = "";
    p.tecnologias.forEach(t => {
      const img = document.createElement("img");
      img.src = t.logo;
      img.alt = t.nombre;
      img.title = t.nombre;
      img.className = "tech-logo";
      techDiv.appendChild(img);
    });
  };
});

// Selecciona el primero por defecto
document.querySelector("#lista-proyectos li").click();

// Descargar CV
document.getElementById("descargar-cv").onclick = function() {
  const link = document.createElement('a');
  link.href = 'CvDiegoContrerasMuñoz.pdf';
  link.download = 'CvDiegoContrerasMuñoz.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};