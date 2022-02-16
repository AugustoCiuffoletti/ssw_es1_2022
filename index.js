// Import stylesheets
import './style.css';
const postiEl = document.getElementById('posti');
const nomeEl = document.getElementById('nome');

const posto="Alessio";
var btn = document.createElement('button');
btn.innerHTML = "P";
btn.addEventListener('click', mostraNome);
postiEl.appendChild(btn);

function mostraNome() {
  nomeEl.innerHTML = posto;
}
