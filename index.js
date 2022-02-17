const plateaEl = document.getElementById('platea');
const palchiEl = document.getElementById('palchi');

const nomeEl = document.getElementById('nome');

const platea = [];
const palchi = [];

for (var j = 0; j < 9; j++) {
  platea.push(new Array(8));
}

for (var j = 0; j < 6; j++) {
  palchi.push(new Array(6));
}

platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';
for (var j = 0; j < platea.length; j++) {
  for (var i = 0; i < platea[j].length; i++) {
    var btn = document.createElement('button');
    btn.nfila = j;
    btn.nposto = i;
    btn.innerHTML = 'P' +  (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePlatea);
    plateaEl.appendChild(btn);
  }
  plateaEl.appendChild(document.createElement('br'));
}

function mostraNomePlatea() {
  nomeEl.innerHTML = platea[this.nfila][this.nposto];
}

palchi[2][1] = 'Luigi';
for (var j = 0; j < palchi.length; j++) {
  for (var i = 0; i < palchi[j].length; i++) {
    var btn = document.createElement('button');
    btn.nfila = j;
    btn.nposto = i;
    btn.innerHTML = 'P' +  (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePalchi);
    palchiEl.appendChild(btn);
  }
  palchiEl.appendChild(document.createElement('br'));
}

function mostraNomePalchi() {
  nomeEl.innerHTML = palchi[this.nfila][this.nposto];
}