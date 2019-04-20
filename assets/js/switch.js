let view = document.querySelector(".pattern");
let controller = document.querySelector(".switch");
controller.addEventListener("click", () => {
    if (view.classList.contains("bright-theme")) {
        view.classList.remove("bright-theme");
        view.classList.add("dark-theme");
    } else {
        view.classList.remove("dark-theme");
        view.classList.add("bright-theme");
    }
});
