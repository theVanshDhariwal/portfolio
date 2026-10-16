const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && ["u", "s", "c"].includes(e.key.toLowerCase())) {
        e.preventDefault();
    }

});