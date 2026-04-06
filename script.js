// =====================
// 📄 LOAD MAIN CONTENT
// =====================

fetch('content.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('main-content').innerHTML = data;
    })
    .catch(err => {
        document.getElementById('main-content').innerHTML = "Error loading content.";
        console.error(err);
    });

// =====================

const enterBtn = document.getElementById("enter-btn");
const intro = document.getElementById("intro-screen");
const layout = document.getElementById("layout");
const marquees = document.querySelectorAll(".marquee");

enterBtn.addEventListener("click", () => {
    intro.style.display = "none";
    layout.style.display = "grid";

    marquees.forEach(m => {
        m.style.display = "block";
    });
});