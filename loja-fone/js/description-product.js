const $heart = window.document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick);
$stars.forEach(($star, index) => {
  $star.addEventListener("click", () => {
    handleClickStar(index);
  });
});

function handleClick() {
  this.classList.toggle("-active");
}

function handleClickStar(key) {
  $stars.forEach(($star, index) => {
    if (index <= key) {
      $star.classList.add("-active");
    } else {
      $star.classList.remove("-active");
    }
  });
}
