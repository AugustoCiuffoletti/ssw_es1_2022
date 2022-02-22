const plateaEl = document.getElementById('platea');
const nomeEl = document.getElementById('nome');

const nfile = 5;
const nposti = 10;

const platea = Array(nfile).fill(Array(nposti).fill("x"));
platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';

var prenotazione = new Array(nfile).fill(Array(nposti));

prenotazione=platea.map( (fila,i) => {
  prenotazione[i]=fila.map( (nomi,j) => {
    btn = document.createElement('button');
    plateaEl.appendChild(btn);
    btn.value=nomi[j];
    btn.innerHTML = 'P' +  (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNome);
  })
  
})

function mostraNome() {
  nomeEl.innerHTML = this.value;
}