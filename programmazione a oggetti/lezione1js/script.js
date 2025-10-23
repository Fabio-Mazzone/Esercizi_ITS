let arr = [10, 20, 30, 40];
//for (let i = 0; i<arr.length; i++) incrementa la variabile i
   // arr.forEach(function(element) { con questa riga si stampa 2 volte l'array creato prima
    //    console.log(element * 2);
     //  });




     // let quadrati = arr.map( x => x * x)  il metodo map crea un nuovo array traformando ogni elemento dell'array originale
//    console.log(quadrati);

let filteredArr= arr.filter(function(element) { // filtra gli elementi di un array in base ad una determinata condizione
    return element > 20;
});
    console.log(filteredArr);

let numeri = [1, 2, 3, 4, 5];

let pari = numeri.filter(x => x % 2 === 0);

console.log(pari);



let riduciarray = [1, 2, 3, 4];

let sum = riduciarray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);



