// 1° step: creare un nuovo oggetto di XMLHttpRequest
let xhr = new XMLHttpRequest();

// 2° step: aprire la connessione da/verso origine/destinazione dei nostri dati
xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);

// 3° step: definire cosa succede quando entriamo in possesso di questi dati, in seguito all'interrogazione
xhr.onload = function() {
    // lo status 200 equivale ad una interrogazione avvenuta con successo
    if(xhr.status === 200) {
        console.log("Ho ricevuto questi dati:\n", xhr.responseText);
    } else {
        console.error("Errore avvenuto: ", xhr.statusText);
    }
};

// 4° step: invio la richiesta
xhr.send();