const TARGET = new Date("2026-05-01T00:00:00+04:00");
  const els = {
    d: document.getElementById("days"),
    h: document.getElementById("hours"),
    m: document.getElementById("minutes"),
    s: document.getElementById("seconds"),
  };
  const container = document.getElementById("container");
  const pad = n => String(Math.max(0,n)).padStart(2,"0");
  function upd(el,v){
    const p = pad(v);
    if(el.textContent !== p){
      el.textContent = p;
      el.classList.remove("flip");
      void el.offsetWidth;
      el.classList.add("flip");
    }
  }
  function tick(){
    const diff = TARGET.getTime() - new Date().getTime();
    if(diff <= 0){
      container.classList.add("launched");
      upd(els.d,0); upd(els.h,0); upd(els.m,0); upd(els.s,0);
      return;
    }
    upd(els.d, Math.floor(diff / 86400000));
    upd(els.h, Math.floor((diff / 3600000) % 24));
    upd(els.m, Math.floor((diff / 60000) % 60));
    upd(els.s, Math.floor((diff / 1000) % 60));
  }
  tick();
  setInterval(tick, 1000);
