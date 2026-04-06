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

// 1. Lock scrolling when the page loads
document.body.style.overflow = "hidden";

enterBtn.addEventListener("click", () => {
    // 2. Hide intro and show content
    intro.style.display = "none";
    layout.style.display = "block"; 

    // 3. Unlock scrolling so they can read the content
    document.body.style.overflow = "auto";

    marquees.forEach(m => {
        m.style.display = "block";
    });
    
    // 4. Scroll to top just in case
    window.scrollTo(0, 0);
});