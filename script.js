document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});


// CODE FOR IMAGE POPPING UP
// LIGHTBOX SYSTEM MECHANICS (CLEAN VISUAL ONLY)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const closeBtn = document.getElementById('closeLightbox');
const zoomImages = document.querySelectorAll('.zoom-image');

zoomImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src; 
        lightboxImg.alt = image.alt; 
        
        // Opens the popup strictly with the source asset image dimensions
        lightbox.showModal();        
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.close();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.close();
    }
});