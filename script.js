const body = document.getElementsByTagName("body");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", (e) => {
  let check = document.getElementById("check");
  check.checked = !check.checked;
  body[0].classList.toggle("dark");
});
