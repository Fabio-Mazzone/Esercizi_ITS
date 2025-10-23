let xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users/",true);

xhr.onload = function() {
    if(xhr.status === 200) {
        // trasformo la mia stringa (formato JSON) in oggetto js (array)
        const users = JSON.parse(xhr.responseText);
        // ora è convertito in una stringa
        console.log("Utenti: ", users);
        users.forEach(elemento => console.log("Nome utente:", elemento.name));
        users.forEach(elemento => console.log("Email:", elemento.email));
        // stampo un secondo livello
        users.forEach(elemento => console.log("Città:", elemento.address.city));

        // faccio il conteggio sull'array ottenuto per verificare quante città ci sono in totale
        const cities = users.map(user => user.address.city);
        // mappiamo il nostro nuovo array 'cities' 1 ad 1 con map
        const citiesSenzaDuplicati = new Set(cities);
        console.log("In totale ci sono " + citiesSenzaDuplicati.size + " città in totale");
    } else {
        console.error("Errore avvenuto: ", xhr.statusText);
    }
};

xhr.send();