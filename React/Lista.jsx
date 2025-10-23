import {useState} from "react";

export default function Lista() {
    // array statico di base
    // const nomi = ["Anna","Luca","Fabio","Riccardo"];

    const [nomi,setNomi] = useState(["Anna","Luca","Fabio","Riccardo"]);

    // obiettivo: utilizzare setNomi(nuovoNome) per aggiungere all'array
    const aggiungiNome = () => {
        setNomi([...nomi, "Nuovo nome"]);
    }

    return (
        <div>
            <h2>Lista di nomi</h2>
            <ul>
                {nomi.map((nome,indice) => {
                    return <li key={indice}>{nome}</li>
                })}    
            </ul>
            <button onClick={aggiungiNome}>Aggiungi</button>
        </div>
    )
}