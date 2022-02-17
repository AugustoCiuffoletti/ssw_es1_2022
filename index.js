const nomeEl = document.getElementById('nome');

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
          function() { 
            nomeEl.innerHTML = self.posti[this.nfila][this.nposto]
          }
        );
        this.element.appendChild(btn);
      }
      this.element.appendChild(document.createElement('br'));
    }
  }
}

palchi = new ordine(4, 6, 'palchi');
palchi.posti[2][2] = 'Luigi';
platea = new ordine(8, 8, 'platea');
platea.posti[2][1] = 'Alessio';
platea.posti[3][4] = 'Gianna';