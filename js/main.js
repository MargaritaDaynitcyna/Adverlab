window.addEventListener("DOMContentLoaded", () => {
    burgerMenu();
});

function burgerMenu() {
    document.querySelector("#burger").addEventListener("click", () => {
        document.querySelector("#menu").classList.add("nav__is-active")
    });
    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("#menu").classList.remove("nav__is-active")
    });
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener("click", () => {
            document.querySelector("#menu").classList.remove("nav__is-active")
        });
    })
}
