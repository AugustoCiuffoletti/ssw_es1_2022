# Esercizio di preparazione al progetto (Passo 4)

Costruiamo un array di array, con le stesse proprietà dette prima. Il questo modo avremo la "platea" del nostro teatro.

Per creare l'array bidimensionale inizializziamo un array vuoto e aggiungiamo a questo una serie di array come elementi, a rappresentare le file della platea.

I bottoni sono sistemati per file consecutive, separando ciascuna con un elemento "br" (document.createElement('br')). In ciascun bottone dovremo registrare due indici, uno per il numero della fila, uno per il posto nella fila. 