const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".nav-links");

// NAV SCROLL EFFECT
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// MOBILE MENU
if (hamburger) {
  hamburger.addEventListener("click", () => {
    links.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
}

// SCROLL REVEAL SYSTEM
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

revealItems.forEach(el => observer.observe(el));

