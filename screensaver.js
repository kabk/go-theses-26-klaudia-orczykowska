// =====================
// 🧠 INACTIVITY TIMER
// =====================

let inactivityTimer;
let screensaverActive = false;

function resetTimer() {
    clearTimeout(inactivityTimer);

    if (screensaverActive) stopScreensaver();

    inactivityTimer = setTimeout(startScreensaver, 10000);
}

["mousemove", "scroll", "keydown", "click"].forEach(event => {
    window.addEventListener(event, resetTimer);
});

resetTimer();

// =====================
// 🎬 SENTENCES + FONTS
// =====================

let sentences = [];
let currentIndex = 0;
let intervalId;

const fonts = [
    "Font1","Font2","Font3","Font4","Font5",
    "Font6","Font7","Font8","Font9","Font10",
    "Font11","Font12","Font13","Font14","Font15",
    "Font16","Font17","Font18","Font19","Font20",
    "Font21","Font22","Font23","Font24","Font25",
    "Font26","Font27","Font28"
];

// Load text
fetch('text-1.txt')
    .then(res => res.text())
    .then(data => {
        sentences = data
            .split(/(?<=[.!?])\s+/)
            .map(s => s.trim())
            .filter(s => s.length > 0);
    });

// =====================
// 🖥️ SCREENSAVER
// =====================

function startScreensaver() {
    screensaverActive = true;

    const screen = document.getElementById("screensaver");
    const box = document.getElementById("sentence-box");

    screen.style.display = "flex";
    screen.classList.add("dark");

    currentIndex = 0;

    intervalId = setInterval(() => {

        // Strobe ONLY on screensaver
        screen.classList.toggle("dark");
        screen.classList.toggle("light");

        // Sentence
        box.textContent = sentences[currentIndex] || "";

        // Random font
        box.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

        currentIndex++;

        if (currentIndex >= sentences.length) {
            currentIndex = 0;
        }

    }, 500);
}

function stopScreensaver() {
    screensaverActive = false;

    const screen = document.getElementById("screensaver");

    screen.style.display = "none";
    screen.classList.remove("dark", "light");

    clearInterval(intervalId);
}