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

for (var j = 0; j < platea.length; j++) {
  for (var i = 0; i < platea[j].length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = 'P' + (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePlatea);
    plateaEl.appendChild(btn);
    platea[j][i] = btn;
  }
  plateaEl.appendChild(document.createElement('br'));
}
platea[2][1].value = 'Alessio';
platea[3][4].value = 'Gianna';

function mostraNomePlatea() {
  nomeEl.innerHTML = this.value;
}

for (var j = 0; j < palchi.length; j++) {
  for (var i = 0; i < palchi[j].length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = 'P' + (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePalchi);
    palchiEl.appendChild(btn);
    palchi[j][i] = btn;
  }
  palchiEl.appendChild(document.createElement('br'));
}
palchi[2][1].value = 'Luigi';

function mostraNomePalchi() {
  nomeEl.innerHTML = this.value;
}
