
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    const blocked =
        key === "f12" ||
        (e.ctrlKey && ["u", "s", "c"].includes(key)) ||
        (e.ctrlKey && e.shiftKey &&
            ["i", "j", "c"].includes(key));

    if (blocked) {
        e.preventDefault();
    }
});
