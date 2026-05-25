/**
 * particles.js — Spawns small floating dots inside the
 * projects section background. Only runs when visible.
 */

const createDot = (canvas) => {
  const dot = document.createElement("span");
  dot.classList.add("particle-dot");

  const x = Math.random() * 100;
  const size = 2 + Math.random() * 3;
  const dur = 4 + Math.random() * 4;

  dot.style.left = `${x}%`;
  dot.style.bottom = "0";
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.animationDuration = `${dur}s`;

  canvas.appendChild(dot);

  setTimeout(() => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot);
    }
  }, dur * 1000);
};

/**
 * Start spawning particles only while the canvas is visible.
 * @param {HTMLElement} canvas
 */
export const spawnParticles = (canvas) => {
  let timer = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !timer) {
          timer = setInterval(() => createDot(canvas), 400);
        } else if (!entry.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      });
    },
    { threshold: 0.05 }
  );

  observer.observe(canvas);
};
