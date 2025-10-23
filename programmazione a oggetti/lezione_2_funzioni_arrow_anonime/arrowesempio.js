console.log("Primi esempi di arrow function e funzioni anonime");

// funzione tradizionale
function saluta(nome) {
    return "Ciao " + nome + "!";
}

// funzione arrow
var saluto = (nome) => { return "Ciao " + nome + "!"; }

// funzione arrow semplificata (quando c'è un solo parametro)
var salutoSemplificato = nome => "Ciao " + nome + "!";

console.log(saluta("Giovanni")); // Aggiunti apici per le stringhe
console.log(saluto("Anna"));     // Aggiunti apici per le stringhe
console.log(salutoSemplificato("Luigi")); // Aggiunti apici per le stringhe

// arrow function senza parametro
const salutoSenzaParametro = () => "Ciao a Tutti!";
console.log(salutoSenzaParametro());

// convertire in arrow function
function raddoppia(somma) {
    return somma * 2;
}

var raddoppio = (somma) => somma * 2;
console.log(raddoppio(5)); // Output: 10



console.log(verificaMaggiorenne(20)); // Output: Maggiorenne

// vediamo il caso con un array

const numeri = [1,2,3,4,5];


// caso di map

const numeriRaddoppiati = numeri.map(n =>n*2);
console.log(numeriRaddoppiati);

// con map convertiamo anche un numero in stringa

const numeriStringhe = numeri.map(n =>  `Numero: ${x}` );
console.log(numeriStringhe);

// caso di filter: valori pari
const numeriPari = numeri.filter(numero => numero % 2 === 0);
console.log(numeriPari);


// filter: numeri maggiori di 3
const numeriMaggioriDiTre = numeri.filter(iteratore => iteratore >3);
console.log(numeriMaggioriDiTre);


// reduce: somma di tutti i numeri

const SommaTotale = numeri.reduce((acc,x) => acc+x, 0);
console.log(SommaTotale);

// prodotto di tutti i numeri

const ProdottoTotale = numeri.reduce((acc,x) => acc*x, 1);
console.log(ProdottoTotale);

// somma dei numeri pari raddoppiati

const SommapariRaddoppiati = numeri.filter(n => n%2 === 0)
                                   .map(n => n*2)
                                   .reduce((acc,x) => acc+x, 0);
console.log(SommapariRaddoppiati);
