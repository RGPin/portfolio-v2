/**
 * mutate href, textContent too if i want
 *
 * @param {HTMLElement} element - The DOM node to update.
 * @param {string} realHref - The actual URL or mailto string.
 * @param {string|null} realText - The new text content (or null to keep original).
 * @returns {HTMLElement} The updated element.
 */
export function revealLink(element, realHref, realText) {
  if (!element) return null;

  element.href = realHref;
  if (realText !== null && realText !== undefined) {
    element.textContent = realText;
  }

  return element;
}

/**
 * mutate href
 *
 * @param {HTMLElement} element - The DOM node to update.
 * @param {string} realHref - The actual URL.
 * @returns {HTMLElement} The updated element.
 */
export function revealResume(element, realHref) {
  if (!element) return null;

  element.href = realHref;
  element.setAttribute("download", "Resume.pdf");
  return element;
}
