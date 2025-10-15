/* PAGINA 2. */

/* LOGICA E FUNZIONAMENTO DOMANDE. BYLORE */
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesnt get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//Variabili
const timeWrapper = document.getElementById("timer-wrapper");
let indice = 0; // indice della domanda corrente
const risposteDate = []; // array per salvare le risposte
// Funzione esterna che ritorna il numero di risposte corrette
function calcolaRisultato(risposteDate, questions) {
  const risposteCorrette = questions.map((q) => q.correct_answer);
  return risposteDate.reduce((count, risposta, i) => {
    return count + (risposta === risposteCorrette[i] ? 1 : 0);
  }, 0);
}

let valutaRisposte = () => {
  // Array delle risposte corrette
  const risposteCorrette = questions.map((q) => q.correct_answer);
  // Confronta risposteDate con risposteCorrette e conta quante sono corrette
  const numeroCorrette = risposteDate.reduce((count, risposta, i) => {
    return count + (risposta === risposteCorrette[i] ? 1 : 0);
  }, 0);
  // Salva il numero di risposte corrette in una variabile globale
  return (window.numeroRisposteCorrette = numeroCorrette);
};

let tempoRimasto = 5;
let timerInterval = null;

function avviaTimer() {
  const circle = document.getElementById("progress");
  const text = document.getElementById("timer-text");
  const raggio = circle.r.baseVal.value;
  const circonferenza = 2 * Math.PI * raggio;

  circle.style.strokeDasharray = circonferenza;
  circle.style.strokeDashoffset = 0;

  tempoRimasto = 5;
  text.textContent = tempoRimasto;

  // cancella un eventuale timer precedente
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    tempoRimasto--;
    text.textContent = tempoRimasto;

    // calcolo animazione cerchio
    const offset = circonferenza - (tempoRimasto / 45) * circonferenza;
    circle.style.strokeDashoffset = offset;

    if (tempoRimasto <= 0) {
      risposteDate.push("errore"); // nessuna risposta data
      clearInterval(timerInterval);
      indice++;

      if (indice >= questions.length) {
        inviaBtn.style.display = "block";
        timeWrapper.style.display = "none";
        opzioniEl.innerHTML = "";
        domandaEl.textContent = "Hai risposto a tutte le domande!";
        contatoreDomande.textContent = `${questions.length}`;
        return;
      }
      mostraDomanda();
    }
  }, 1000);
}

// Elementi HTML
const quizContainer = document.getElementById("quiz-container");
const domandaEl = document.getElementById("domanda");
const opzioniEl = document.getElementById("opzioni");
const contatoreDomande = document.getElementById("contatore-domande");

// Bottone "invia risposte" (alla fine)
const inviaBtn = document.createElement("button");
inviaBtn.id = "invia-risposte";
inviaBtn.textContent = "Invia Risposte";
inviaBtn.style.display = "none";
inviaBtn.onclick = () => {
  window.location.href = "results_page.html";
};
quizContainer.appendChild(inviaBtn);

// Funzione per mostrare la domanda corrente
function mostraDomanda() {
  avviaTimer();
  // se siamo alla fine, non mostrare più domande
  if (indice >= questions.length) return;

  const domanda = questions[indice];

  // mostra il testo domanda
  domandaEl.textContent = domanda.question;

  // pulisci le opzioni precedenti
  opzioniEl.innerHTML = "";

  // crea array di tutte le opzioni (corretta + sbagliate) e mescola
  const tutteLeOpzioni = [
    domanda.correct_answer,
    ...domanda.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  // crea i bottoni per ciascuna opzione
  tutteLeOpzioni.forEach((opzione) => {
    const btn = document.createElement("button");
    btn.textContent = opzione;
    btn.type = "button";

    btn.onclick = () => {
      // salva risposta cliccata
      risposteDate.push(opzione);
      clearInterval(timerInterval);
      // passa alla prossima domanda
      indice++;

      // se è l'ultima domanda, mostra il bottone "Invia"
      if (indice === questions.length) {
        inviaBtn.style.display = "block";
        opzioniEl.innerHTML = ""; // rimuovi bottoni
        domandaEl.textContent = "Hai risposto a tutte le domande!";
        contatoreDomande.textContent = `${questions.length}`;
        timeWrapper.style.display = "none";

        // Dopo il quiz, puoi fare:
        clearInterval(risultatoFinale);
        const risultatoFinale = calcolaRisultato(risposteDate, questions);
        console.log("Numero risposte corrette:", risultatoFinale);
        localStorage.setItem("risposteCorrette", risultatoFinale);
        return;
      }

      // altrimenti mostra la prossima domanda
      mostraDomanda();
    };

    opzioniEl.appendChild(btn);
  });

  // aggiorna contatore domanda
  contatoreDomande.textContent = `${indice + 1}`;
}
// Avvio quiz all'apertura pagina
window.onload = mostraDomanda;
