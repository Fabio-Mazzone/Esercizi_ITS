let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/users/", true);

/**nella richiesta POST devo definire un header
/* per garantire che i dati inviati siano coerenti con la collezione di dati di base
*/
xhr.setRequestHeader("Content-Type","application/json");


// dati da inviati
const nuovoUtente = {
     "id": 1,
    "name": "Mario Rossi",
    "username": "mrossi",
    "email": "mrossi@gmail.com",
    "address": {
      "city": "Chieti",
      }
}

// funzione che determina l'esito del caricamento

xhr.onload = function() {
    if(xhr.status === 201) {// 201 equivale ad "item created"
    console.log("Elemento aggiunto alla collezione")
    console.log("Oggetto in formato JSON"); // in formato Json

    // se voglio stamparlo in forma di array 
    console.log("\nOggetto in formato array")
    console.log(JSON.parse(xhr.responseText));

}};

xhr.send(JSON.stringify(nuovoUtente));