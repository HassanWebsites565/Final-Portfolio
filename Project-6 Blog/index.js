const btn = document.querySelector(".bar-icon");
const list = document.querySelector(".cont")

btn.addEventListener("click", () => {
    list.classList.toggle("cont")
})