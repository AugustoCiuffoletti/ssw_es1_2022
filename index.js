// Import stylesheets
import './style.css';
const postiEl = document.getElementById('posti');
const nomeEl = document.getElementById('nome');

const posti = new Array(10);
for (var i = 0; i < posti.length; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = "P"+ ( i + 1 );
  btn.value="";
  btn.addEventListener('click', mostraNome);
  postiEl.appendChild(btn);
  posti.push(btn);
}
posti[2].value="Alessio";
posti[5].value="Gianna";

function mostraNome() {
  nomeEl.innerHTML = this.value;
}
