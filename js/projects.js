/**
 * projects.js — Data-driven project card rendering with
 * staggered reveal animation via IntersectionObserver.
 *
 
 
 */

const PROJECTS = [
  {
    icon: "🚦",
    title: "Traffic Sign Classification",
    desc: "Attention-based CNN integrating ResNet50 and EfficientNetV2 with self-attention feature fusion. Achieved 99.5% accuracy on benchmark datasets.",
    tech: ["TensorFlow", "ResNet50", "EfficientNetV2"],
    url: "https://github.com/Sandy055",
  },
  {
    icon: "🔬",
    title: "Skin Cancer Detection",
    desc: "Compared six deep learning models for automated skin cancer classification with image augmentation workflows. Achieved 99.7% accuracy.",
    tech: ["TensorFlow", "ResNet50", "InceptionV3"],
    url: "https://github.com/Sandy055",
  },
  {
    icon: "🎭",
    title: "Multimodal Emotion Recognition",
    desc: "Dual-stream Transformer with cross-attention for audio-video fusion. 96.11% accuracy on emotion recognition benchmarks.",
    tech: ["TensorFlow", "Transformers", "Cross-Attention"],
    url: "https://arxiv.org/abs/2407.18552",
  },
  {
    icon: "✈️",
    title: "ItinerEase (SIH)",
    desc: "LLM-powered travel planning app using RAG and semantic search. Presented at Smart India Hackathon with 35% engagement boost.",
    tech: ["Python", "Django", "LLMs", "RAG"],
    url: "https://github.com/Sandy055/ItinerEase-SIH",
  },
  {
    icon: "🏥",
    title: "SeniorCare Healthcare App",
    desc: "Healthcare mobile app for senior adults. Tracks medicines, appointments, and vital signs using HCI design principles.",
    tech: ["TypeScript", "React Native", "HCI"],
    url: "https://github.com/Sandy055/SeniorCare-Healthcare-App-for-Elderly_HCI-App",
  },
  {
    icon: "🤖",
    title: "AgentBench",
    desc: "LLM task environment and grading framework for evaluating coding agents. Hybrid procedural + LLM scoring across 15 attempts.",
    tech: ["Python", "LLMs", "Evaluation"],
    url: "https://github.com/Sandy055/agentbench",
  },
];

/**
 * Build a single card element.
 * @param {object} p — project data object
 * @returns {HTMLElement}
 */
const buildCard = (p) => {
  const card = document.createElement("article");
  card.classList.add("project-card");

  const techHtml = p.tech
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");

  card.innerHTML = `
    <span class="project-card-icon">${p.icon}</span>
    <h3 class="project-card-title">${p.title}</h3>
    <p class="project-card-desc">${p.desc}</p>
    <div class="project-card-tech">${techHtml}</div>
    <a class="project-card-link" href="${p.url}"
       target="_blank" rel="noopener noreferrer">
      View Project &rarr;
    </a>
  `;

  return card;
};

/**
 * Render all cards into the container with a staggered
 * fade-in triggered by IntersectionObserver.
 * @param {HTMLElement} container
 */
export const renderProjects = (container) => {
  const cards = PROJECTS.map((p, i) => {
    const card = buildCard(p);
    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition =
      `opacity 0.45s ease ${i * 0.08}s, ` + `transform 0.45s ease ${i * 0.08}s`;
    container.appendChild(card);
    return card;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((c) => {
            c.style.opacity = "1";
            c.style.transform = "translateY(0)";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  observer.observe(container);
};
