const navbar = document.querySelector("body > header > div");

const updateNavbar = () => {
  const isScrolled = window.scrollY > 25;

  navbar.classList.toggle("scrolled", isScrolled);
};

window.addEventListener("scroll", updateNavbar, {
  passive: true,
});

updateNavbar();
