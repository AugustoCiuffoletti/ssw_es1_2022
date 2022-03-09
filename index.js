class ordinePrenotazione {
  prenotazione = [];
  constructor(posti, elementName) {
    function mostraNome() {
      nomeEl.innerHTML = this.value;
    }
    var element = document.getElementById(elementName);
    this.prenotazione = posti.map((fila, i) => {
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button');
        element.appendChild(btn);
        btn.value = nome;
        btn.style.color = (nome !== "x") ? 'red' : 'green';
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.addEventListener('click', mostraNome);
        return btn;
      });
      element.appendChild(document.createElement('br'));
      return p;
    });

    function mostraNome() {
      nomeEl.innerHTML = this.value;
    }
  }
}

const nomeEl = document.getElementById('nome');

const nfilePlatea = 7;
const npostiPlatea = 10;
const nfilePalchi = 4;
const npostiPalchi = 6;

const teatro = {
  platea: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("x")),
  palchi: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("x")),
};

teatro.platea[2][1] = 'Alessio';
teatro.platea[3][4] = 'Gianna';
teatro.palchi[2][1] = 'Luigi';

var plateaPrenotazione = new ordinePrenotazione(teatro.platea, 'platea');
var palchiPrenotazione = new ordinePrenotazione(teatro.palchi, 'palchi');