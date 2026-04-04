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