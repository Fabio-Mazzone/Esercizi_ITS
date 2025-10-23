import {useState} from "react";

import "./Lampadina.css"; // qui andrà il css del nostro componente

// NOTA: lampadina è la parte fissa della classe, on & off sono le condizioni variabili

export default function Lampadina() {
    const [interruttore, setInterruttore] = useState(false);

    return (
        <div>
            <p>Stato della lampadina:</p>
            <strong>{interruttore ? "accesa":"spenta"}</strong>
            <div className = {"lampadina" + " " + (interruttore ? "on" : "off")}
                onClick={() => setInterruttore(!interruttore)}></div>
            
        </div>
    );

}