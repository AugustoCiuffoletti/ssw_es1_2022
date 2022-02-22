# Esercizio di preparazione al progetto (Passo 3)

Create un array di alcune posizioni (indicativamente 10) ed associate il contenuto di ciascun elemento ad un tasto, in modo che premendo il tasto compaia il valore associato nella matrice.

Per creare l'array senza necessariamente riempirlo potete utilizzare "new Array(10)" che crea una array di valori indefiniti di dieci posizioni. Poi potrete inizializzarne alcune per verificare il funzionamento del programma.

Nel callback associato al tasto potrete recuperare il valore associato al tasto. Infatti la variabile "this" nel callback corrisponde all'elemento su cui si è verificato l'evento (il click), e quindi potete risalire al valore del suo attributo "value"
