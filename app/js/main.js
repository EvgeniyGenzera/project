let burger = document.querySelector(".burger");
let container = document.getElementById('container')
let sidebar = document.getElementById('sidebar')
burger.addEventListener("click", () => {
    burger.classList.toggle("activebrgr");
    container.classList.toggle("activeContainer");
    sidebar.classList.toggle('activeSidebar');
})