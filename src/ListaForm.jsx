import {useState} from "react";

export default function Lista() {
    const [nomi,setNomi] = useState(["Anna","Luca","Fabio","Riccardo"]);
    const [nuovoNome,setNuovoNome] = useState("");

    // obiettivo: utilizzare setNomi(nuovoNome) per aggiungere all'array
    const aggiungiNome = (e) => {
        e.preventDefault(); // importante: evita il refresh della pagina
        // se la stringa è vuota, la ignoro
        if(!nuovoNome.trim()) return;
        // aggiungo, se la stringa non è vuota, il nome all'array  
        setNomi([...nomi,nuovoNome]);
        // azzero la variabile "nuovoNome" dopo l'inserimento:
        setNuovoNome(""); 
    }

    return (
        <div>
            <h2>Lista di nomi</h2>
            <form onSubmit={aggiungiNome}>
                <input type="text" placeholder="Inserisci qui il nuovo nome..." value={nuovoNome} onChange={(e) => {
                    setNuovoNome(e.target.value);
                }} />
                <button type="submit">Aggiungi valore</button>
            </form>

            <ul>
                {nomi.map((nome,indice) => {
                    return <li key={indice}>{nome}</li>
                })}    
            </ul>
        </div>
    )
}