let sentences = [];
let currentIndex = 0;
let intervalId;

// List of all font families defined in CSS
const fonts = [
    "Font1","Font2","Font3","Font4","Font5",
    "Font6","Font7","Font8","Font9","Font10",
    "Font11","Font12","Font13","Font14","Font15",
    "Font16","Font17","Font18","Font19","Font20",
    "Font21","Font22","Font23","Font24","Font25","Font26","Font27","Font28"
];

fetch('text-1.txt')
    .then(response => response.text())
    .then(data => {
        // Split sentences
        sentences = data
            .split(/(?<=[.!?])\s+/)
            .map(s => s.trim())
            .filter(s => s.length > 0);

        if (sentences.length > 0) {
            startSequence();
        }
    })
    .catch(error => console.error("Error loading text:", error));

function startSequence() {
    const box = document.getElementById('sentence-box');
    const body = document.body;

    // Start in dark mode
    body.classList.add('dark');

    // Show first sentence immediately
    box.textContent = sentences[currentIndex];
    // Apply random font
    box.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    currentIndex++;

    intervalId = setInterval(() => {

        // Toggle strobe mode
        body.classList.toggle('dark');
        body.classList.toggle('light');

        // Show next sentence
        box.textContent = sentences[currentIndex];

        // Random font
        box.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

        currentIndex++;

        // Loop forever
        if (currentIndex >= sentences.length) {
            currentIndex = 0;
        }

    }, 500); // 1 second per sentence
}