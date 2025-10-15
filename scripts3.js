const percentDiv = document.getElementById('percentualeC')

percentDiv.innerHTML = `<h2>${parseInt(localStorage.getItem("risposteCorrette")) * 10}%</h2><p>${localStorage.getItem("risposteCorrette")}/10 questions</p>`

const wrongPercent = document.getElementById('percentualeW')

wrongPercent.innerHTML = `<h2>${100 - (parseInt(localStorage.getItem("risposteCorrette")) * 10)}%</h2><p>${10 - (localStorage.getItem("risposteCorrette"))}/10 questions</p>`

// bottone che porta alla pagina di feedback
const Button = document.getElementById("rateUs");
Button.addEventListener("click", function () {
  window.location.href = "feedback_page.html";
});
Button.style.cursor = "pointer";

const circleText = document.getElementById("circle-progress-text")

const inserisciTesto = () => {
if (parseInt(localStorage.getItem("risposteCorrette")) >= 6) {
  let text = "test superato"
} else {
  let text = "test non superato"
  }
  return circleText.innerText = text
  
}

inserisciTesto()
