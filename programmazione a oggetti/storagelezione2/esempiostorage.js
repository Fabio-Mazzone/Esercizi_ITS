// recuperiamo il valore dell'id coubnter e lo impostiamo a 0

let count = localStorage.getItem('counter') || 0;
document.getElementById('counter').textContent = count;

// incrementa il contatore
// addEventListener mette il browser in ascolto di un evento triggerabile
document.getElementById('incrementa').addEventListener('click', () => {
    count++;
    localStorage.setItem('counter',count);
    document.getElementById('counter').textContent = count;
});

document.getElementById('decrementa').addEventListener('click', () => {
    count--;
    localStorage.setItem('counter',count);
    document.getElementById('counter').textContent = count
    if (count < 0) {
    count = 0; 
    localStorage.setItem('counter', count);
    document.getElementById('counter').textContent = count;
}
});
document.getElementById('resetta').addEventListener('click', () => {
    localStorage.setItem('counter', 0);
    document.getElementById('counter').textContent = 0;
});