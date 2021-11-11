let burger = document.querySelector(".burger");
let container = document.getElementById('container')
burger.addEventListener("click", () => {
    burger.classList.toggle("activebrgr");
    container.classList.toggle("activeContainer");
})