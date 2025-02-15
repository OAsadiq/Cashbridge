document.addEventListener("DOMContentLoaded", function () {
    const ctaBtn = document.querySelector(".cta-btn");
    ctaBtn.addEventListener("click", function () {
        alert("Redirecting to sign-up page...");
        window.location.href = "#";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".testimonial-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    // Highlight Active Page
    const currentLocation = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});
