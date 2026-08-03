const backends = [
  "https://project1.onrender.com/api/ping",
  "https://project2.onrender.com/api/ping",
  "https://project3.onrender.com/api/ping",
  "https://project4.onrender.com/api/ping",
];

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

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(url, {
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.ok) {
        console.log(`${url} is awake`);
        delay = 10 * 60 * 1000;
      } else {
        console.log(`${url} returned ${res.status}`);
        delay = 3000;
      }
    } catch (err) {
      clearTimeout(timeout);
      console.log(`${url} unreachable`);
      delay = 3000;
    }

    const remaining = endTime - Date.now();
    if (remaining <= 0) break;

    await new Promise((resolve) =>
      setTimeout(resolve, Math.min(delay, remaining)),
    );
  }

  document.removeEventListener("visibilitychange", extendTimer);
  console.log(`${url}: stopped`);
}

backends.forEach(pingBackend);
