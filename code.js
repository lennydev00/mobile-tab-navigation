const buttons = document.querySelectorAll(".button")
const images = document.querySelectorAll(".img")

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        document.querySelector(".show").classList.remove("show")
        document.querySelector(".active").classList.remove("active")
        buttons[i].classList.add("show")
        images[i].classList.add("active")
    })
}

