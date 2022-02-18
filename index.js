const nomeEl = document.getElementById('nome');

class ordine {
  posti = [];
  constructor(nposti, nfile, elementName) {
    function mostraNome () { 
      nomeEl.innerHTML = this.value;
    };
    var element = document.getElementById(elementName);
    for (var j = 0; j < nfile; j++) {
      this.posti.push(new Array(nposti));
    }
    for (var j = 0; j < this.posti.length; j++) {
      for (var i = 0; i < this.posti[j].length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = 'P' + (j + 1) + (i + 1);
        btn.addEventListener('click', mostraNome);
        element.appendChild(btn);
        this.posti[j][i]=btn;
      }
      element.appendChild(document.createElement('br'));
    }
  }
}

palchi = new ordine(4, 6, 'palchi');
palchi.posti[2][2].value = 'Luigi';
platea = new ordine(8, 8, 'platea');
platea.posti[2][1].value = 'Alessio';
platea.posti[3][4].value = 'Gianna';