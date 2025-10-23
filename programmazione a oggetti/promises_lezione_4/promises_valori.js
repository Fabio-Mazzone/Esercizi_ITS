new Promise(resolve => {
  resolve(5);
})
  .then(num => {
    console.log("Valore iniziale:", num);
    return num * 2;
  })
  .then(num => {
    console.log("Dopo raddoppio:", num);
    return num + 10;
  })
  .then(num => {
    console.log("Dopo somma 10:", num);
    return num / 3;
  })
  .then(num => {
    console.log("Risultato finale:", num);
  })
  .catch(err => console.error("Errore:", err));