const plateaEl = document.getElementById('platea');
const nomeEl = document.getElementById('nome');

const platea = [];
for (var j = 0; j < 4; j++) {
  platea.push(new Array(10));
}

for (var j = 0; j < platea.length; j++) {
  for (var i = 0; i < platea[j].length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = 'P' +  (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNome);
    plateaEl.appendChild(btn);
    platea[j][i]=btn;
  }
  plateaEl.appendChild(document.createElement('br'));
}
platea[2][1].value = 'Alessio';
platea[3][4].value = 'Gianna';


function mostraNome() {
  nomeEl.innerHTML = this.value;
}