/**
 * Simuliamo 3 eventi a cascata: autenticazione, ordinazione, ed esito del nostro evento. da fare con le promises
 * catena di eventi 1 -> 2-> 3
 */

function getLogin() {
   return new Promise(resolve => {
    setTimeout(() => {
        resolve( {id:1, username: "fabio", password: "1234"})
        
    }, 3000);
   });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Ordine1","Ordine2","Ordine3"],350)
        }, 5000);
    });
}

function getOutcome() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Ordine Effettuato")
        }, 10000);
    });
}
// promise.all permette di concatenare diverse promise tra di loro
Promise.all([getLogin(),getOrders(),getOutcome()])
    .then(result => {
        const  [user,orders,outcome] = result;
        console.log("Utente: ", user);
        console.log("Ordini: ", orders);
        console.log("Esito: ", outcome);

    })
    .catch(error => console.error("Errore di tipo:", error));