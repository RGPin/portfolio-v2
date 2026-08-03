const backends = [
  "https://top-blog-api-dgjh.onrender.com/api/ping",
  "https://top-file-uploader-6oxo.onrender.com/api/ping",
  "https://top-inventory.onrender.com/api/ping",
  "https://top-members-only-ynk9.onrender.com/api/ping",
];

// 1. Initialize state tracker
const backendStates = backends.reduce((acc, url) => {
  acc[url] = "waking"; // Assume waking on first load
  return acc;
}, {});

// Expose to window so the UI can read it on load
window.__BACKEND_STATES__ = backendStates;

// 2. Helper to broadcast state to the UI
function emitStatusUpdate() {
  window.dispatchEvent(
    new CustomEvent("backend-status-update", {
      detail: { ...backendStates },
    }),
  );
}

async function pingBackend(url) {
  let endTime = Date.now() + 30 * 60 * 1000;
  let delay = 3000;

  const extendTimer = () => {
    if (!document.hidden) {
      endTime = Math.max(endTime, Date.now() + 15 * 60 * 1000);
    }
  };

  document.addEventListener("visibilitychange", extendTimer);

  while (Date.now() < endTime) {
    if (document.hidden) {
      await new Promise((resolve) => {
        const checkVisible = () => {
          if (!document.hidden) {
            document.removeEventListener("visibilitychange", checkVisible);
            extendTimer();
            resolve();
          }
        };

        document.addEventListener("visibilitychange", checkVisible);
      });
      continue;
    }

    let currentState = "waking";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(url, {
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.ok) {
        currentState = "online";
        delay = 10 * 60 * 1000;
      } else {
        currentState = "offline";
        delay = 3000;
      }
    } catch (err) {
      clearTimeout(timeout);
      currentState = "offline";
      delay = 3000;
    }

    // 3. Update state and emit ONLY if it changed
    if (backendStates[url] !== currentState) {
      backendStates[url] = currentState;
      emitStatusUpdate();
    }

    const remaining = endTime - Date.now();
    if (remaining <= 0) break;

    await new Promise((resolve) =>
      setTimeout(resolve, Math.min(delay, remaining)),
    );
  }

  document.removeEventListener("visibilitychange", extendTimer);
  if (backendStates[url] !== "offline") {
    backendStates[url] = "offline";
    emitStatusUpdate();
  }
}

emitStatusUpdate();
backends.forEach(pingBackend);
