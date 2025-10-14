const stars = document.querySelectorAll("#rating-stars img")
let selected = 0

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((s) => s.classList.remove("hovered"))
    for (let i = 0; i <= index; i++) stars[i].classList.add("hovered")
  })

  star.addEventListener("mouseout", () => {
    stars.forEach((s) => s.classList.remove("hovered"))
  })

  star.addEventListener("click", () => {
    selected = index
    stars.forEach((s) => s.classList.remove("selected"))
    for (let i = 0; i <= selected; i++) stars[i].classList.add("selected")
  })
})
