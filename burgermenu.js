const burgermenu = document.getElementById("burgermenu");
const nav = document.getElementById("nav-list");

burgermenu.addEventListener("click", () => {
  burgermenu.classList.toggle("active");

  if (burgermenu.classList.contains("active")) {
    burgermenu.textContent = "×";
    nav.style.display = "flex";
  } else {
    burgermenu.textContent = "☰";
    nav.attributes.removeNamedItem("style");
  }
});
