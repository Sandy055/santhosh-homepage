import { initNav } from "./nav.js";
import { renderProjects } from "./projects.js";
import { spawnParticles } from "./particles.js";

// Love the use of modules here, makes your JS really easy to read and understand the functionality! Great job!

const init = () => {
  initNav();

  const grid = document.getElementById("projects-grid");
  if (grid) {
    renderProjects(grid);
  }

  const canvas = document.getElementById("projects-canvas");
  if (canvas) {
    spawnParticles(canvas);
  }
};

document.addEventListener("DOMContentLoaded", init);
