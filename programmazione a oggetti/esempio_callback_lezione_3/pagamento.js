/**
 * 1. controllo disponibilità prodotto (10s)
 * se il prodotto è disponibile richiama la callback, se non disponibile con false
 * 2. aggiunta al carrello 3 sec
 * 3. pagamento oggetto 5sec
 * call back true se a buon fine senno false se non riuscito
 * 4. conferma spedizione
 */

function controlloDisponibilita(product, callback) {
    setTimeout(() => {
        const disponibile = product === "orologio";
        
        if (disponibile) {
            console.log("Il prodotto è disponibile e può essere aggiunto al carrello!");
            callback(true);
        } else {
            console.log("Il prodotto non è disponibile"); 
            callback(false);
        }
    }, 10000);  
}

function aggiuntaCarrello(product, callback) {
    setTimeout(() => {
        console.log("Il prodotto " + product + " è stato aggiunto al carrello con successo!");
        callback(true);
    }, 3000);  
}

function pagamentoProdotto(product, callback) {
    setTimeout(() => {
        const pagamentoRiuscito = true;
        
        if (pagamentoRiuscito) {
            console.log("Pagamento completato con successo!");
            callback(true);
        } else {
            console.log("Pagamento fallito!");
            callback(false);
        }
    }, 5000);
}

function confermaSpedizione(product) {
    console.log("Il prodotto: " + product + " è stato confermato e verrà spedito a breve!");
}

// AVVIO PROCESSO
console.log("Avvio processo d'acquisto...");

controlloDisponibilita("orologio", (disponibile) => {
    if (disponibile) {
        aggiuntaCarrello("orologio", (aggiunto) => {
            if (aggiunto) {
                pagamentoProdotto("orologio", (pagato) => {
                    if (pagato) {
                        confermaSpedizione("orologio");
                    }
                });
            }
        });
    }
});