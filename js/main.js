import { initNav } from "./nav.js";
import { renderProjects } from "./projects.js";
import { spawnParticles } from "./particles.js";

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
