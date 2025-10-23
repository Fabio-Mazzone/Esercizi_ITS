// memorizzazione di un dato in local storage
localStorage.setItem('username','Giovanni');

// recupero del dato si utilizza get item

const user = localStorage.getItem('username');
console.log(user);

// rimuovere un dato dal local storage

localStorage.removeItem('username');


/* ----- SESSION STORAGE----- */
// Memorizzazione di un dato nella session storage

sessionStorage.setItem('sessionID','abc123');

// recupero di un dato nella session storage

const id = sessionStorage.getItem('sessionID');
console.log(id);

// cancellare un dato

sessionStorage.removeItem('sessionID');