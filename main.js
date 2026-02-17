// Generate random space background balls
function createSpaceBalls() {
  const spaceBackground = document.getElementById("space-background");
  const ballCount = 20; // Number of balls

  for (let i = 0; i < ballCount; i++) {
    const ball = document.createElement("div");
    ball.className = "ball";

    // Random size between 2px and 15px
    const size = Math.random() * 9 + 3;
    ball.style.width = size + "px";
    ball.style.height = size + "px";

    // Random position
    ball.style.left = Math.random() * 95 + "%";
    ball.style.top = Math.random() * 100 + "%";

    // Random opacity for depth effect
    ball.style.opacity = Math.random() * 0.9 + 0.1;

    // Random animation duration
    ball.style.animationDuration = Math.random() * 10 + 10 + "s";

    // Random animation delay
    ball.style.animationDelay = Math.random() * 4 + "s";

    spaceBackground.appendChild(ball);
  }
}

// Initialize space background on page load
document.addEventListener("DOMContentLoaded", createSpaceBalls);

const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// Theme Toggle Button functionality
(function () {
  const btn = document.getElementById("theme-toggle-btn");
  const btnDesktop = document.getElementById("theme-toggle-btn-desktop");

  function setActive(on) {
    document.body.classList.toggle("theme-2", on);
    if (btn) {
      btn.classList.toggle("active", on);
      const icon = btn.querySelector("i");
      if (icon) icon.className = on ? "ri-sun-line" : "ri-moon-line";
    }
    if (btnDesktop) {
      btnDesktop.classList.toggle("active", on);
      const iconD = btnDesktop.querySelector("i");
      if (iconD) iconD.className = on ? "ri-sun-line" : "ri-moon-line";
    }
    localStorage.setItem("portfolioTheme", on ? "1" : "0");
  }

  // init from storage
  const saved = localStorage.getItem("portfolioTheme");
  setActive(saved === "1");

  function toggle() {
    const isOn = document.body.classList.contains("theme-2");
    setActive(!isOn);
  }

  if (btn) btn.addEventListener("click", toggle);
  if (btnDesktop) btnDesktop.addEventListener("click", toggle);
})();

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// Back to top button behavior
(function () {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  const showAfter = 300; // px scrolled before showing

  function onScroll() {
    if (window.scrollY > showAfter) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // initial check in case page loads scrolled
  onScroll();
})();
