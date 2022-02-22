const nomeEl = document.getElementById('nome');

for (var j = 0; j < nfilePlatea; j++) {
  teatro.platea.push(new Array(npostiPlatea).fill("x"));
}
platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';

class ordine {
  prenotazione = [];
  constructor(posti, elementName) {
    function mostraNome () { 
      nomeEl.innerHTML = this.value;
    };
    var element = document.getElementById(elementName);

    prenotazione = posti.map( (fila,i) => {
      p=fila.map( (nome,j) => {
        btn = document.createElement('button');
        plateaEl.appendChild(btn);
        btn.value=nome;
        btn.innerHTML = 'P' +  (j + 1) + (i + 1);
        btn.addEventListener('click', mostraNome);
        return btn;
      })
      plateaEl.appendChild(document.createElement('br'));
      return p;
    })
    
    function mostraNome() {
      nomeEl.innerHTML = this.value;
    }
  }
}

const teatro = { 
  platea: [],
  palchi: []
}
palchi = new ordine(4, 6, 'palchi');
palchi.posti[2][2].value = 'Luigi';
platea = new ordine(8, 8, 'platea');
platea.posti[2][1].value = 'Alessio';
platea.posti[3][4].value = 'Gianna';