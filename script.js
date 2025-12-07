const sidebarIcon = document.getElementById("sidebar");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.getElementById("close");
sidebarIcon.addEventListener("click",() => sidebar.classList.add("active"));

sidebarClose.addEventListener("click" , () => sidebar.classList.remove("active"));

  