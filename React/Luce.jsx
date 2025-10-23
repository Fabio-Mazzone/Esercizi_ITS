// import necessario per gestire lo stato del componente
import { useState } from "react";

/*
anatomia di un componente react:
1. definizione
2. stati o variabili
3. funzioni o metodi in javascript
4. return che mi permette di iniettare il codice del componente nell'app
*/

// posso sintetizzare l'export del componente in un'unica espressione
export default function Luce() {
    // stato iniziale e metodo per aggiornare lo stato corrente
    // [statoIniziale,setStatoIniziale]
    const [interruttore,seInterruttore] = useState(false);

    // qui ci andrà la funzione (blocco 3)
    const handleClick = () => {
        seInterruttore(prev => !prev);
    }

    // return (blocco 4)
    return (
        <div>
            <h2>Applicazione funzionamento luce</h2>
            <p>Stato lampadina:</p>
            <strong>{interruttore ? "accesa":"spenta"}</strong>
            <button onClick={handleClick}>Click</button>
        </div>
    );


}
