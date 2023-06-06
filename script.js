// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// On click
document.querySelector("#SideMenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar
const Menu = document.querySelector("#SideMenu");
document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
