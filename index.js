// Import stylesheets
import './style.css';
const postiEl = document.getElementById('posti');
const nomeEl = document.getElementById('nome');

const posto = new Array(10).fill("x");
posto[2]="Alessio";
posto[5]="Gianna";

const prenotazione = new Array(10);
posto.map( (nome, i) => { 
  var btn=document.createElement('button');
  postiEl.appendChild(btn);
  btn.innerHTML = "P"+ ( i + 1 );
  btn.value=nome;
  btn.addEventListener('click', mostraNome);
  return (btn)
})

function mostraNome() {
  nomeEl.innerHTML = this.value;
}
