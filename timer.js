let tempoRimasto = 45;
let IntervalloTempo;
const timerEl = document.getElementById("tempo");

function startTimer() {
  IntervalloTempo = setInterval(() => {
    tempoRimasto--;
    timerEl.textContent = tempoRimasto;
    if (tempoRimasto <= 0) {
      clearInterval(IntervalloTempo);
      indice++;
      contatoreDomande.textContent = `${indice + 1}/${questions.length}`;
      mostraDomanda();
    }
  }, 1000);
}
startTimer();
