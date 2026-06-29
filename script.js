document.addEventListener("DOMContentLoaded", () => {
    // 1. HAMBURGER MENU MECHANICS
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }

    // 2. LIGHTBOX SYSTEM MECHANICS
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const closeBtn = document.getElementById('closeLightbox');
    const zoomImages = document.querySelectorAll('.zoom-image');

    if (lightbox && lightboxImg && closeBtn) {
        zoomImages.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImg.src = image.src; 
                lightboxImg.alt = image.alt; 
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
    }

    // 3. PORTFOLIO FILTER MECHANICS
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Manage active button states
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            portfolioCards.forEach(card => {
                const cardCategories = card.getAttribute("data-category").split(" ");

                if (filterValue === "all" || cardCategories.includes(filterValue)) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });
});