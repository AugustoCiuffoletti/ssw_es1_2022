// Import stylesheets
import './style.css';
const postiEl = document.getElementById('posti');
const nomeEl = document.getElementById('nome');

const posti = new Array(10);
posti[2]="Alessio";
posti[5]="Gianna";
for (var i = 0; i < posti.length; i++) {
  var btn = document.createElement('button');
  btn.value = i;
  btn.innerHTML = "P"+ ( i + 1 );
  btn.addEventListener('click', mostraNome);
  postiEl.appendChild(btn);
}

function mostraNome() {
  nomeEl.innerHTML = posti[this.value];
}
