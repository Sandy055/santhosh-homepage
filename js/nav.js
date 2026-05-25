/**
 * nav.js — Mobile menu toggle.
 */
export const initNav = () => {
  const toggle = document.getElementById("navbar-toggle");
  const links = document.getElementById("navbar-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll(".navbar-link").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
      });
    });
  }
};
