const revealElements = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

const nav = document.querySelector("header");
const setNavShadow = () => {
  if (window.scrollY > 30) {
    nav.classList.add("nav-shadow");
  } else {
    nav.classList.remove("nav-shadow");
  }
};

setNavShadow();
window.addEventListener("scroll", setNavShadow);
