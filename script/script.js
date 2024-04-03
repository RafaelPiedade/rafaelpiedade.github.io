const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

//event listener
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav_is_open");
});

function scrollFor(id) {
  let element = document.getElementById(id);
  window.scrollTo({
    behavior: "smooth",
    top: (element.offsetTop - 90),
  });
}
