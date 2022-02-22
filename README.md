# Esercizio di preparazione al progetto (Passo 4)

Costruiamo un array di array di stringhe, con le stesse proprietà dette prima. Il questo modo avremo i posti prenotati nella "platea" del nostro teatro. In corrispondenza avremo un array di array di bottoni, creato utilizzand i nomi contenuti nel primo.

Per creare l'array bidimensionale di stringhe inizializziamo un array corrispondente alle file, e a ciascuna file facciamo corrispondere un array di stringhe ("x" per il posto libero). Poi esebuiamo una operazione di map per costruire l'array di tasti, con i valori corrispondenti alle stringhe nell'array originale.

I bottoni sono sistemati per file consecutive, separando ciascuna con un elemento "br" (document.createElement('br')).

Notare che ambedue gli indici sono visibili nel map più interno che costruisce il bottone corrispondente al singolo posto.
