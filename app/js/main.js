const burger = document.querySelector(".burger");
const container = document.getElementById('container')
const sidebar = document.getElementById('sidebar')
burger.addEventListener("click", () => {
    burger.classList.toggle("activebrgr");
    container.classList.toggle("activeContainer");
    sidebar.classList.toggle('activeSidebar');
})