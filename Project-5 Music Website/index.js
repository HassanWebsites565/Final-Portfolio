let list = document.querySelector(".nav3");
let btn = document.querySelector(".bar-icon");

btn.addEventListener("click", () => {
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});
