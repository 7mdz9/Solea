(function () {
  const target = new Date("2026-05-01T00:00:00+04:00").getTime();
  const grid = document.getElementById("cd-grid");
  const launched = document.getElementById("cd-launched");
  const nodes = {
    days:    grid.querySelector('[data-unit="days"]'),
    hours:   grid.querySelector('[data-unit="hours"]'),
    minutes: grid.querySelector('[data-unit="minutes"]'),
    seconds: grid.querySelector('[data-unit="seconds"]')
  };
  const last = {};
  let intervalId = 0;

  const fmt = (key, val) => key === "days" ? String(val) : String(val).padStart(2, "0");

  const setVal = (key, val) => {
    const node = nodes[key];
    const text = fmt(key, val);
    if (last[key] === text) return;
    node.textContent = text;
    node.classList.remove("ticked");
    void node.offsetWidth; // restart animation
    node.classList.add("ticked");
    last[key] = text;
  };

  const update = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      window.clearInterval(intervalId);
      grid.hidden = true;
      launched.hidden = false;
      return;
    }
    const totalSec = Math.floor(diff / 1000);
    setVal("days",    Math.floor(totalSec / 86400));
    setVal("hours",   Math.floor((totalSec % 86400) / 3600));
    setVal("minutes", Math.floor((totalSec % 3600) / 60));
    setVal("seconds", totalSec % 60);
  };

  update();
  intervalId = window.setInterval(update, 1000);
})();
