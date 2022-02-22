# Esercizio di preparazione al progetto (Passo 5)

Eliminiamo il problema della ripetizione delle strutture: creaiamo una classe "ordine" che ci serve a definire un generico ordine di posti.
Si tratta di ricopiare il codice all'interno del costruttore della classe ed adattarlo. 

Il costruttore prende come parametri:
- l'array con i posti già prenotati
- il nome dell'elemento HTML che ospita i bottoni

Gli array con i posti prenotati dei due ordini di posti sono ora aggregati in un unico oggetto. I due array sono inizializzati separatamente. Forse si potrebbe cercare di rendere più compatto creando una classe specifica per gli array contenenti l'ordine dei posti: potete provarci.

Poi si creano due oggetti con le prenotazioni per i due ordini di posti, uno per la platea e uno per i palchi.
