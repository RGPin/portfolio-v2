import { PROJECTS } from "./projects-data.js";

document.addEventListener("DOMContentLoaded", () => {
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
            <span class="demo-status-dot" data-backend="${project.backend}"></span></a>
            
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
      statusText.textContent =
        "Waking up servers (may take at least 10 seconds)";
    } else {
      statusDot.className = "status-dot offline";
      statusText.textContent =
        "APIs Unreachable, please try refreshing the page";
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
