// ==========================
// LOADER
// ==========================

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

});

// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ==========================
// SMOOTH NAVIGATION
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        navLinks.classList.remove("active");

    });

});

// ==========================
// MUSIC
// ==========================

const music = document.getElementById("bgMusic");

let played = false;

document.addEventListener("click", () => {

    if (!played) {

        music.volume = 0.35;

        music.play();

        played = true;

    }

}, { once: true });
// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(1)";

    });

});

// ==========================
// FADE UP ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(
    ".story-card, .gallery-item, .song, .letter-box, .section-title"
).forEach(el => {

    observer.observe(el);

});

// ==========================
// CURRENT YEAR (Optional)
// ==========================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `Made with ♡ • ${year}`;

}

// ==========================
// END
// ==========================
