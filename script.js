const d = document.getElementById("days"),
      h = document.getElementById("hours"),
      m = document.getElementById("minutes"),
      s = document.getElementById("seconds");

const bg = document.getElementById("background"),
      c = document.getElementById("countdownContainer"),
      t = document.querySelector(".countdown-text"),
      st = document.getElementById("status");

function eoy() {
    const n = new Date();
    return new Date(2026, 0, 19, 23, 59, 59);
}

function onNewYear() {
    bg.classList.add("new-bg");
    c.classList.add("new-container");
    t.classList.add("new-text");
    st.textContent = "Countdown complete!";
    createConfetti();
    createFireworks();
    running = false;
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 9999);
    }
}


function u() {
    const n = new Date(),
          diff = (eoy() - n);

    if (diff <= 0) {
        d.textContent = h.textContent = m.textContent = s.textContent = "00";
        onNewYear();
        running = false;
        return;
    }

    d.textContent = String(Math.floor(diff / 864e5)).padStart(2, "0");
    h.textContent = String(Math.floor(diff / 36e5) % 24).padStart(2, "0");
    m.textContent = String(Math.floor(diff / 6e4) % 60).padStart(2, "0");
    s.textContent = String(Math.floor(diff / 1e3) % 60).padStart(2, "0");
}

let running = true;
let lastTime = 0;

function loop(currentTime) {
    if (!running) return;
    if (currentTime - lastTime >= 1000) {
        u();
        lastTime = currentTime;
    }
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
