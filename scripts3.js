// bottone che porta alla pagina di feedback
const Button = document.getElementById("rateUs")
Button.addEventListener("click", function () {
  window.location.href = "feedback_page.html"
})
Button.style.cursor = "pointer"

// CERCHIO PER RISULTATO

const circleResult = () => {
  const correct = parseInt(localStorage.getItem("risposteCorrette"))
  const correctCircle = document.querySelector(".progress-ring-correct")
  const wrongCircle = document.querySelector(".progress-ring-wrong")

  // calcolo circonferenza
  const raggio = 300
  const circonferenza = 2 * Math.PI * raggio

  const correctPercent = correct / 10
  const wrongPercent = 1 - correctPercent

  const correctLen = circonferenza * correctPercent
  const wrongLen = circonferenza * wrongPercent

  // Stili CSS
  wrongCircle.style.strokeDasharray = `${wrongLen} ${circonferenza}`
  correctCircle.style.strokeDasharray = `${correctLen} ${circonferenza}`

  wrongCircle.style.strokeDashoffset = 0
  correctCircle.style.strokeDashoffset = -wrongLen

  const circleText = document.getElementById("circle-progress-text")

  const inserisciTesto = () => {
    let text = ""
    if (correct >= 6) {
      text = "test superato"
    } else {
      text = "test non superato"
    }
    return (circleText.textContent = text)
  }
  inserisciTesto()
}
circleResult()
