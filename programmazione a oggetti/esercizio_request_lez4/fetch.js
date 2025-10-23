/*
considerando la collezione https://jsonplaceholder.typicode.com/posts
svolgere i seguenti task:
1. stampare i primi 5 elementi
2. fare una POST con userId, body, text
*/

// GET
let xhrGET = new XMLHttpRequest();
xhrGET.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhrGET.onload = function() {
if (xhrGET.status === 200) {
    const posts = JSON.parse(xhrGET.responseText);
    // solo i primi 5 post
    const datiRichiesti = posts.slice(0, 5);
        console.log("I primi 5 elementi sono: \n", datiRichiesti);
    }
}
xhrGET.send();

// POST
let xhrPOST = new XMLHttpRequest();
xhrPOST.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhrPOST.setRequestHeader("Content-Type", "application/json");

const nuovoPost = {
    "userId": 1,
    "title": "titolo",
    "body": "testo di prova"
};

xhrPOST.onload = function() {
    if (xhrPOST.status === 201) {
        console.log("Post creato con successo: \n", JSON.parse(xhrPOST.responseText));
    }
}
xhrPOST.send(JSON.stringify(nuovoPost));

/* ------- trasformazione in FETCH API -------- */
/* FETCH - blocco GET */
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok) {
            throw new Error("Errore nella GET: ", response.status);
        } else {
            return response.json();
        }
    })
    .then(listaPost => {
        console.log("Di seguito avremo i primi 5 elementi: \n");
        listaPost.slice(0, 5).forEach(elemento => console.log(elemento));
    })
    .catch(error => console.error("Errore di tipo", error));


/* FETCH - blocco POST */
const nuovoPostFetch = {
    "userId": 1,
    "title": "titolo",
    "body": "testo di prova"
};


fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(nuovoPostFetch)
    }
 )
    .then(response => {
        if(!response.ok) {
            throw new Error("Errore nella POST: ", response.status);
        } else {
            return response.json();
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error("Errore di tipo", error));