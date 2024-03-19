const shareBtn = document.querySelector("#share-btn");
const links = document.querySelector(".links");

shareBtn.addEventListener("click", () => {
  links.classList.toggle("show");
  shareBtn.classList.toggle("active");
});
