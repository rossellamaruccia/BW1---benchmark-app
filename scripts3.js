const percentDiv = document.getElementById("percentualeC");

percentDiv.innerHTML = `<h2>${
  parseInt(localStorage.getItem("risposteCorrette")) * 10
}%</h2><p>${localStorage.getItem("risposteCorrette")}/10 questions</p>`;

const wrongPercent = document.getElementById("percentualeW");

wrongPercent.innerHTML = `<h2>${
  100 - parseInt(localStorage.getItem("risposteCorrette")) * 10
}%</h2><p>${10 - localStorage.getItem("risposteCorrette")}/10 questions</p>`;

// bottone che porta alla pagina di feedback
const Button = document.getElementById("rateUs");
Button.addEventListener("click", function () {
  window.location.href = "feedback_page.html";
});
Button.style.cursor = "pointer";

// CERCHIO PER RISULTATO
const circleResult = () => {
  const correct = parseInt(localStorage.getItem("risposteCorrette"));
  const correctCircle = document.querySelector(".progress-ring-correct");
  const wrongCircle = document.querySelector(".progress-ring-wrong");

  // calcolo circonferenza
  const raggio = 180;
  const circonferenza = 2 * Math.PI * raggio;

  const correctPercent = correct / 10;
  const wrongPercent = 1 - correctPercent;

  const correctLen = circonferenza * correctPercent;
  const wrongLen = circonferenza * wrongPercent;

  // Stili CSS
  wrongCircle.style.strokeDasharray = `${wrongLen} ${circonferenza}`;
  correctCircle.style.strokeDasharray = `${correctLen} ${circonferenza}`;

  wrongCircle.style.strokeDashoffset = 0;
  correctCircle.style.strokeDashoffset = -wrongLen;

  const circleText = document.getElementById("circle-progress-text");

  const inserisciTesto = () => {
    const testoPromosso = document.getElementById("testoCorretto");
    const testoBocciato = document.getElementById("testoSbagliato");

    if (correct >= 6) {
      testoPromosso.style.display = "block";
    } else {
      testoBocciato.style.display = "block";
    }
  };
  inserisciTesto();
};
circleResult();
