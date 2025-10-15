// bottone che porta alla pagina di feedback
const percentDiv = document.getElementById("percentualeC")

percentDiv.innerHTML = `<h2>${
  parseInt(localStorage.getItem("risposteCorrette")) * 10
}%</h2><p>${localStorage.getItem("risposteCorrette")}/10 questions</p>`

const wrongPercent = document.getElementById("percentualeW")

wrongPercent.innerHTML = `<h2>${
  100 - parseInt(localStorage.getItem("risposteCorrette")) * 10
}%</h2><p>${10 - localStorage.getItem("risposteCorrette")}/10 questions</p>`

const Button = document.getElementById("rateUs")
Button.addEventListener("click", function () {
  window.location.href = "feedback_page.html"
})
Button.style.cursor = "pointer"

// CERCHIO PER RISULTATO

const circleResult = (correct, total) => {
  const correctCircle = document.querySelector(".progress-ring-correct")
  const wrongCircle = document.querySelector(".progress-ring-wrong")

  // calcolo circonferenza
  const raggio = 300
  const circonferenza = 2 * Math.PI * raggio

  const correctPercent = correct / total
  const wrongPercent = 1 - correctPercent

  const correctLen = circonferenza * correctPercent
  const wrongLen = circonferenza * wrongPercent

  // Stili CSS
  wrongCircle.style.strokeDasharray = `${wrongLen} ${circonferenza}`
  correctCircle.style.strokeDasharray = `${correctLen} ${circonferenza}`

  wrongCircle.style.strokeDashoffset = 0
  correctCircle.style.strokeDashoffset = -wrongLen
}
circleResult(2, 10)

const circleText = () => {
  let text = document.getElementById("circle-progress-text")
  console.log()
  if (parseInt(localStorage.getItem("risposteCorrette")) >= 6) {
    text.innerText = "Test superato"
  } else {
    text.innerText = "test non superato"
  }
  console.log()
}
circleText()
