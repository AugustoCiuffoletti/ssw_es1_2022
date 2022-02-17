const plateaEl = document.getElementById('platea');
const palchiEl = document.getElementById('palchi');

const nomeEl = document.getElementById('nome');

const platea = [];

for (var j = 0; j < 9; j++) {
  platea.push(new Array(8));
}

class ordine {
  posti = [];
  element;
  constructor(nposti, nfile, elementName) {
    this.element = document.getElementById(elementName);
    for (var j = 0; j < nfile; j++) {
      this.posti.push(new Array(nposti));
    }
    for (var j = 0; j < this.posti.length; j++) {
      for (var i = 0; i < this.posti[j].length; i++) {
        var btn = document.createElement('button');
        btn.nfila = j;
        btn.nposto = i;
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        let self = this;
        btn.addEventListener(
          'click', 
          function() { nomeEl.innerHTML = self.posti[this.nfila][this.nposto] }
        );
        this.element.appendChild(btn);
      }
      this.element.appendChild(document.createElement('br'));
    }
  }
}

palchi = new ordine(4, 6, 'palchi');
palchi.posti[2][2] = 'Luigi';

//platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';
for (var j = 0; j < platea.length; j++) {
  for (var i = 0; i < platea[j].length; i++) {
    var btn = document.createElement('button');
    btn.nfila = j;
    btn.nposto = i;
    btn.innerHTML = 'P' + (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNomePlatea);
    plateaEl.appendChild(btn);
  }
  plateaEl.appendChild(document.createElement('br'));
}

function mostraNomePlatea() {
  nomeEl.innerHTML = platea[this.nfila][this.nposto];
}
