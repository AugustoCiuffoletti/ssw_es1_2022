// Import stylesheets
import './style.css';
const postiEl = document.getElementById('posti');
const nomeEl = document.getElementById('nome');

const posto = new Array(10).fill("x");
posto[2]="Alessio";
posto[5]="Gianna";

const prenotazione = new Array(10);
posto.map( (nome, i) => { 
  prenotazione[i]=document.createElement('button');
  postiEl.appendChild(prenotazione[i]);
  prenotazione[i].innerHTML = "P"+ ( i + 1 );
  prenotazione[i].value=nome;
  prenotazione[i].addEventListener('click', mostraNome);
})

function mostraNome() {
  nomeEl.innerHTML = this.value;
}
