/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* =========================
   DARK MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const icon =
        themeBtn.querySelector("i");


    if (
        document.body.classList.contains("dark")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/* =========================
   NAVBAR SCROLL
========================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   PROJECT SCROLL ANIMATION
========================= */

const cards =
    document.querySelectorAll(".project-card");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    observer.observe(card);

});


/* =========================
   VIDEO MODAL
========================= */

function openVideo(event, videoName) {

    event.preventDefault();


    const modal =
        document.getElementById("videoModal");

    const video =
        document.getElementById("projectVideo");

    const source =
        video.querySelector("source");


    source.src =
        "videos/" + videoName + ".mp4";


    video.load();


    modal.style.display = "flex";


    video.currentTime = 0;


    video.play();

}


/* =========================
   CLOSE VIDEO
========================= */

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const video =
        document.getElementById("projectVideo");


    video.pause();

    video.currentTime = 0;

    modal.style.display = "none";

}


/* =========================
   CLOSE WHEN CLICKING OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("videoModal");


    if (event.target === modal) {

        closeVideo();

    }

});


/* =========================
   CLOSE WITH ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeVideo();

    }

});