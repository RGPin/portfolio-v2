import { revealLink } from "./js/contact-mutation.js";

document.addEventListener("DOMContentLoaded", () => {
  const linkConfigs = [
    {
      id: "email-link",
      href: "mailto:lalalala@gmail.com",
      text: "lalalala@gmail.com",
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
});
