const panel1 = document.querySelectorAll(".panel");

panel1.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panel1.forEach((panel) => {
    panel.classList.remove("active");
  });
}
