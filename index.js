class ordine {
  prenotazione = [];
  constructor(posti, elementName) {
    function mostraNome() {
      nomeEl.innerHTML = this.value;
    }
    var element = document.getElementById(elementName);

    prenotazione = posti.map((fila, i) => {
      p = fila.map((nome, j) => {
        btn = document.createElement('button');
        plateaEl.appendChild(btn);
        btn.value = nome;
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.addEventListener('click', mostraNome);
        return btn;
      });
      plateaEl.appendChild(document.createElement('br'));
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
  palchi: [],
};
for (var i = 0; i < nfilePlatea; i++) {
  teatro.platea.push(new Array(npostiPlatea).fill('x'));
}
for (var i = 0; i < nfilePalchi; i++) {
  teatro.palchi.push(new Array(npostiPalchi).fill('x'));
}
var plateaPrenotazione;
var palchiPrenotazione;

platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';
palchi[4][1] = 'Luigi';
plateaPrenotazione = new ordine(4, 6, 'platea');
palchiPrenotazione = new ordine(8, 8, 'palchi');
