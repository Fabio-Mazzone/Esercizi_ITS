const voti = [18, 24, 28, 30, 22, 19, 27, 25, 30, 21];

let votipositivi = voti.filter(function(element) {
    return element >= 24
})
console.log(votipositivi);

let somma = voti.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let mediavoti = somma / voti.length;

console.log(mediavoti);

// avviso voti boh
const Descrizionetestuale = voti.map(v => "Superato con voto" + " "+ v);
console.log(Descrizionetestuale); 