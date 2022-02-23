const plateaEl = document.getElementById('platea');
const palchiEl = document.getElementById('palchi');

const nomeEl = document.getElementById('nome');

const teatro = {
  platea: [],
  palchi: [],
};

// ==== PLATEA =====

const nfilePlatea = 7;
const npostiPlatea = 10;

teatro.platea=Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("x"));
teatro.platea[2][1] = 'Alessio';
teatro.platea[3][4] = 'Gianna';

var prenotazionePlatea = teatro.platea.map((fila, i) => {
  p = fila.map((nome, j) => {
    btn = document.createElement('button');
    plateaEl.appendChild(btn);
    btn.value = nome;
    btn.style.color = nome !== 'x' ? 'red' : 'green';
    btn.innerHTML = 'P' + (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePlatea);
    return btn;
  });
  plateaEl.appendChild(document.createElement('br'));
  return p;
});

function mostraNomePlatea() {
  nomeEl.innerHTML = this.value;
}

plateaEl.appendChild(document.createElement('br'));

// ==== PALCHI ====

const nfilePalchi = 4;
const npostiPalchi = 6;

teatro.palchi=Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("x"));
teatro.palchi[2][1] = 'Luigi';

var prenotazionePalchi = teatro.palchi.map((fila, i) => {
  p = fila.map((nome, j) => {
    btn = document.createElement('button');
    plateaEl.appendChild(btn);
    btn.value = nome;
    btn.style.color = nome !== 'x' ? 'red' : 'green'; 
    btn.innerHTML = 'P' + (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePlatea);
    return btn;
  });
  plateaEl.appendChild(document.createElement('br'));
  return p;
});

function mostraNomePalchi() {
  nomeEl.innerHTML = this.value;
}
