// biblioteca
const library = [
    { id: 1, title: "Il Nome della Rosa", autore: "Umberto Eco", copiadisponibile: 3 },
    { id: 2, title: "1984", autore: "George Orwell", copiadisponibile: 2 },
    { id: 3, title: "Il Piccolo Principe", autore: "Antoine de Saint-Exupéry", copiadisponibile: 5 },
    { id: 4, title: "Fahrenheit 451", autore: "Ray Bradbury", copiadisponibile: 0 },
    { id: 5, title: "Il Signore degli Anelli", autore: "J.R.R. Tolkien", copiadisponibile: 1 },
    { id: 6, title: "Orgoglio e Pregiudizio", autore: "Jane Austen", copiadisponibile: 4 }
];

// funzione di ricerca un libro per titolo
function searchBook(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = library.find(b => b.title === title);
            book ? resolve(book) : reject("Libro non trovato");
        }, 1000);
    });
}

// Prenota un libro
function reserveBook(book) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (book.copiadisponibile > 0) {
                book.copiadisponibile--;
                resolve(book);
            } else {
                reject("Nessuna copia disponibile");
            }
        }, 1500);
    });
}

// funzione download del libro
function downloadBook(book) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Download completato per ${book.title}`);
        }, 2000);
    });
}

// Invio della conferma
function sendConfirmation(user, book) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Email inviata a ${user} per ${book.title}`);
        }, 1000);
    });
}



// Richieste di prenotazione
const requests = [
    { user: "mario@email.com", title: "1984" },
    { user: "luca@email.com", title: "Fahrenheit 451" },
    { user: "anna@email.com", title: "Il Nome della Rosa" }
];

// esecuzione della libreria 
handleReservations(requests);