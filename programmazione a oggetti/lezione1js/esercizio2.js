let parole = ["casa", "sole", "albero", "scuola", "mare", "cielo", "auto", "palla"];

let filtrolunghezza = parole.filter(function(element){
   return  element.length > 4
});

console.log(filtrolunghezza);

let maiuscolo = filtrolunghezza.map(el => el.toUpperCase());
console.log(maiuscolo);

let concatenazione = parole.reduce((acc, curr) => acc + " " + curr);

console.log(concatenazione)

// contare parole che iniziano con la lettera a 

let contatore = 0;
for (let i=0; i < parole.length; i++) {
    if(parole[i][0] === "a") {
        contatore++;
    }
}
console.log("Cominciano con la lettera a un totale di: " + contatore + " parole");


let contalettereA = 0;
for (let i=0; i<parole.length; i++) {
    for (let k=0; k<parole[i].length; k++) {
        if(parole[i][k] === "a") {
            contalettereA++;
        }
    }
}
console.log("Ci sono in totale" + " " + contalettereA + " " + "lettere 'a' nell'array")
    