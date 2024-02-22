var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidenav");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
};