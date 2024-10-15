const bar = document.querySelector(".bar-icon")
const uList = document.querySelector(".list")
bar.addEventListener("click", () => {
    if (uList.style.transform === "" || uList.style.transform === "translateX(800px)") {
        uList.style.transform = "translateX(1px)";
    } else {
        uList.style.transform = "translateX(800px)";
    }
})

function toggleImg() {
    const viewAll = document.querySelector(".btn2")
    const extraImg = document.querySelectorAll(".extra-img")

    extraImg.forEach(img => {
        if(img.style.display === "" || img.style.display === "none"){
            img.style.display = "block";
            viewAll.textContent = "View less"
        } else {
            img.style.display = "none"
            viewAll.textContent = "View all"
        }
    })

}