/**
 * Replaces a placeholder element with a real mailto anchor tag.
 * @param {HTMLElement} element - The DOM node to replace.
 */
export function injectEmail(element) {
  if (!element || !element.parentNode) return;
  const user = "pinosanrg";
  const domain = "gmail.com";

  const link = document.createElement("a");
  link.href = `mailto:${user}@${domain}`;
  link.textContent = `${user}@${domain}`;
  link.className = element.className;
  link.id = element.id;
  // how to maintain all link attributes, styles and just replace href and textcontent?

  element.replaceWith(link);
  return link;
}

/**
 * Replaces a placeholder element's link.
 * @param {HTMLElement} element - The DOM node to replace.
 */
export function injectLinkedin(element) {
  if (!element || !element.parentNode) return;
  const domain = "https://www.linkedin.com";
  const path = "rygel-pinosan-6157922ba";

  const link = document.createElement("a");
  link.href = `${domain}/in/${path}`;
  link.textContent = element.textContent;
  link.style = element.style;
  link.className = element.className;
  link.id = element.id;
  // how to maintain all link attributes, styles and just replace href?

  element.replaceWith(link);
  return link;
}

/**
 * Replaces a placeholder element's link.
 * @param {HTMLElement} element - The DOM node to replace.
 */
export function injectGithub(element) {
  if (!element || !element.parentNode) return;
  const domain = "https://github.com";
  const path = "RGPin";

  const link = document.createElement("a");
  link.href = `${domain}/${path}`;
  link.textContent = element.textContent;
  link.style = element.style;
  link.className = element.className;
  link.id = element.id;
  // how to maintain all link attributes, styles and just replace href?

  element.replaceWith(link);
  return link;
}
