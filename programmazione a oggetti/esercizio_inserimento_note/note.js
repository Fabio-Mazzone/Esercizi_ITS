const notaSalvata = localStorage.getItem('nota');

if (notaSalvata) {
    document.getElementById('contenitoreNote').textContent = notaSalvata;

}

// aggiungo la nota e la salvo

document.getElementById('aggiungiNota').addEventListener('click', function() {
    const nota = document.getElementById('noteInput').value;

})

// elimino il caso in cui la nota è vuota e clicko sul button

if (nota.trim() != '') {
    document.getElementById('contenitoreNote').textContent = nota;
    document.getElementById('noteInput').value = '';
}


