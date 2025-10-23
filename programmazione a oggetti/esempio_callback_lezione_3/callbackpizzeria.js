// esempio di callback di base
// simulo chiamate asincrone
// 1. preparazione impasto (2sec = 2000ms)
// 2. aggiunta ingredienti (1sec = 1000ms)
// 3.cottura terminata (3sec = 3000ms)
// 4. la pizza può essere servita

/**
 * step:
 * individuazione delle funzioni e gestione della sintassi
 * della callback stessa
 * 
 * h(x) dove h = f(g(x)) dove per esempio g è la funzione quadrata
 * ed f è la funzione raddoppia
 */


// 1° step: preparazione impasto
function preparaImpasto(callback) {
    setTimeout(() => {
        console.log("Impasto pronto!");
        callback();
    }, 2000);
}

// 2° step: aggiunta ingredienti

function aggiuntaIngredienti(callback) {
    setTimeout(() => {
        console.log("Ingredienti aggiunti all'impasto!");
        callback();
        
    }, 1000);
}

// 3° step: termina cottura

function cuociPizza(callback) {
    setTimeout(() => {
        console.log("La pizza è cotta!");
        callback();
        
    }, 3000);

}

// 4° (step servi la pizza), definiamo il flusso della callback

preparaImpasto(() => {
    aggiuntaIngredienti(() => {
        cuociPizza(() => {
            setTimeout(() => {
                console.log("La pizza è pronta per essere servita!");
            }, 1000);
            
        });
    });
});
