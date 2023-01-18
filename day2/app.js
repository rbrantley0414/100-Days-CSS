// toggle active and inactive

var menu = document.getElementById("menu");

menu.addEventListener("click", function () {
    const lines = document.querySelectorAll(".line");
    menu.classList.toggle("active");
    lines.forEach((line) => {
        line.classList.remove("no-animation");
        line.classList.toggle("active");
        line.classList.toggle("inactive");
    });
});
