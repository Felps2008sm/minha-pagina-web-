/* DARK/LIGHT MODE */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
        toggle.textContent = "☀️";
    } else {
        html.setAttribute("data-theme", "dark");
        toggle.textContent = "🌙";
    }
});

/* ANIMAÇÃO AO SCROLL */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
});

elements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
});