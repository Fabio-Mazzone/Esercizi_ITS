// simulazione procedura di autenticazione

function login(username, password) {
    // sintassi di una Promise: return new Promise((resolve, reject))
    // resolve: (caso di esito positivo), reject caso di esito negativo/ rifiuto
    return new Promise((resolve, reject) => {
        console.log("Inserimento credenziali: ");
        setTimeout(() => {
           if(username === "admin" && password === "1234") {
            // qui va l'esito positivo
            resolve("Login effettuato con successo");
           } else { // qui l'esito negativo
                reject("Le Credenziali inserite sono Errate!")
           } 
        }, 5000);       // timeout che simula attesa di 5 secondi
    });
}

login("admin","1234")
    .then(result => console.log(result))
    .catch(error => console.error(error));