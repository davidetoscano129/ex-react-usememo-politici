**Premessa**: Stai costruendo una pagina per visualizzare una lista di politici. Tuttavia, vuoi evitare calcoli inutili e ottimizzare la performance del tuo componente. Segui le milestone per migliorare progressivamente il codice.

# Milestone 1: Recuperare e visualizzare i dati

1. Effettua una chiamata API a
https://boolean-spec-frontend.vercel.app/freetestapi/politicians

2. Salva la risposta in uno stato React (useState).

3. Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:
- Nome (name)
- Immagine (image)
- Posizione (position)
- Breve biografia (biography)

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

# Milestone 2: Implementare la ricerca ottimizzata

1. Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
2. Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
3. Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.