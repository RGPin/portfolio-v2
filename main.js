import { revealLink, revealResume } from "./js/contact-mutation.js";

document.addEventListener("DOMContentLoaded", () => {
  const linkConfigs = [
    {
      id: "email-link",
      href: atob("bWFpbHRvOnBpbm9zYW5yZ0BnbWFpbC5jb20="),
      text: atob("cGlub3NhbnJnQGdtYWlsLmNvbQ=="),
    },
    {
      id: "linkedin-link",
      href: atob(
        "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3J5Z2VsLXBpbm9zYW4tNjE1NzkyMmJhLw==",
      ),
      text: null,
    },
    {
      id: "github-link",
      href: atob("aHR0cHM6Ly9naXRodWIuY29tL1JHUGlu"),
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

  const resumeLink = document.querySelector("#resume-link");

  const revealResumeFn = () => revealResume(resumeLink, "/files/Resume.pdf");

  resumeLink.addEventListener("mouseenter", revealResumeFn, { once: true });
  resumeLink.addEventListener("focus", revealResumeFn, { once: true });

  resumeLink.addEventListener(
    "click",
    (e) => {
      e.preventDefault();

      revealResumeFn();
      resumeLink.click();
    },
    { once: true },
  );
});
