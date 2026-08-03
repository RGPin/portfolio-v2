import { revealLink } from "../js/contact-mutation.js";
import { PROJECTS } from "./projects-data.js";

document.addEventListener("DOMContentLoaded", () => {
  const linkConfigs = [
    {
      id: "email-link",
      href: "mailto:lalalala@gmail.com",
      text: "lal_alala@gmail.com",
    },
    {
      id: "linkedin-link",
      href: "https://www.linkedin.com/in/wewewewewewewe",
      text: null,
    },
    {
      id: "github-link",
      href: "https://github.com/oogabooga",
      text: null,
    },
  ];

  linkConfigs.forEach(({ id, href, text }) => {
    const element = document.querySelector(`#${id}`);
    if (!element) return;

    const reveal = () => revealLink(element, href, text);

    element.addEventListener("mouseenter", reveal, { once: true });
    element.addEventListener("focus", reveal, { once: true });

    element.addEventListener(
      "click",
      (e) => {
        e.preventDefault();

        reveal();

        if (href.startsWith("mailto:")) {
          window.location.href = href;
        } else {
          const target = element.getAttribute("target");
          if (target === "_blank") {
            window.open(href, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = href;
          }
        }
      },
      { once: true },
    );
  });

  const projectsContainer = document.querySelector(".projects");
  if (projectsContainer) {
    projectsContainer.innerHTML = PROJECTS.map(
      (project) => `
      <article class="project-card">
        <div class="project-content">
          <h2 class="project-title">${project.title}</h2>
          <p class="project-type">${project.type}</p>
          <p class="project-description">${project.description}</p>
          <div class="project-stack">
            <span class="stack-label">Core Stack:</span>
            ${project.coreStack.map((tech) => `<span class="stack-item">${tech}</span>`).join(", ")}
          </div>
          <div class="project-extra">
            <span class="stack-label">Additional Tools:</span>
            ${project.additionalTools.map((tool) => `<span class="stack-item">${tool}</span>`).join(", ")}
          </div>
          <div class="project-links">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub</a>
            <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-link">Live Demo
            <span class="demo-status-dot" data-backend="${project.backendUrl}"></span></a>
            
          </div>
        </div>
      </article>
    `,
    ).join("");
  }

  const updateUI = (states) => {
    const statusDot = document.querySelector("#status-dot");
    const statusText = document.querySelector("#status-text");
    const stateValues = Object.values(states);

    if (stateValues.every((s) => s === "online")) {
      statusDot.className = "status-dot online";
      statusText.textContent = "APIs Online";
    } else if (stateValues.some((s) => s === "waking")) {
      statusDot.className = "status-dot waking";
      statusText.textContent = "Waking up servers...";
    } else {
      statusDot.className = "status-dot offline";
      statusText.textContent = "APIs Unreachable";
    }

    document.querySelectorAll(".demo-status-dot").forEach((dot) => {
      const url = dot.dataset.backend;
      const state = states[url] || "offline";
      dot.className = `demo-status-dot ${state}`;
    });
  };

  window.addEventListener("backend-status-update", (e) => updateUI(e.detail));

  if (window.__BACKEND_STATES__) {
    updateUI(window.__BACKEND_STATES__);
  }
});
