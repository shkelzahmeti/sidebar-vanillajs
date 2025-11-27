const btnNavEl = document.querySelector(".sidebar-toggle");
const btnSidebarEl = document.querySelector(".close-btn");
const sidebarEl = document.querySelector(".sidebar");

btnNavEl.addEventListener("click", function () {
  sidebarEl.classList.toggle("show-sidebar");
});

btnSidebarEl.addEventListener("click", function () {
  sidebarEl.classList.remove("show-sidebar");
});
