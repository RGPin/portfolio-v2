import { injectEmail, injectGithub, injectLinkedin } from "./js/injection.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.querySelector("#email-link");
  const linkedinLink = document.querySelector("#linkedin-link");
  const githubLink = document.querySelector("#github-link");

  emailLink.addEventListener("mouseenter", () => injectEmail(emailLink), {
    once: true,
  });
  emailLink.addEventListener("focus", () => injectEmail(emailLink), {
    once: true,
  });
  emailLink.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      const newLink = injectEmail(emailLink);

      if (newLink) newLink.click();
    },
    { once: true },
  );

  linkedinLink.addEventListener(
    "mouseenter",
    () => injectLinkedin(linkedinLink),
    {
      once: true,
    },
  );
  linkedinLink.addEventListener("focus", () => injectLinkedin(linkedinLink), {
    once: true,
  });
  linkedinLink.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      const newLink = injectLinkedin(linkedinLink);

      if (newLink) newLink.click();
    },
    { once: true },
  );

  githubLink.addEventListener("mouseenter", () => injectGithub(githubLink), {
    once: true,
  });
  githubLink.addEventListener("focus", () => injectGithub(githubLink), {
    once: true,
  });
  githubLink.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      const newLink = injectGithub(githubLink);

      if (newLink) newLink.click();
    },
    { once: true },
  );
});
