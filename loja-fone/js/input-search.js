const $inputSearch = document.querySelector(".input-search");
const $icons = document.querySelectorAll(".input-search .icon");

$icons.forEach($icon => {
  $icon.addEventListener("click", (e) => {
    e.preventDefault();
    $inputSearch.classList.toggle("-active");
  });
});
