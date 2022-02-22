class ordine {
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
  platea: [],
  palchi: []
};
for (var i = 0; i < nfilePlatea; i++) {
  teatro.platea.push(new Array(npostiPlatea).fill('x'));
}
for (var i = 0; i < nfilePalchi; i++) {
  teatro.palchi.push(new Array(npostiPalchi).fill('x'));
}
teatro.platea[2][1] = 'Alessio';
teatro.platea[3][4] = 'Gianna';
teatro.palchi[3][1] = 'Luigi';

var plateaPrenotazione = new ordine(teatro.platea, 'platea');
var palchiPrenotazione = new ordine(teatro.palchi, 'palchi');