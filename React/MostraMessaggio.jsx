import {useState} from "react";
import './MostraMessaggio.css';

export default function MostraMessaggio() {
    const [visible,setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Nascondi " : "Mostra "}
                messaggio    
            </button>

            {visible && <p>Questo è il messaggio segreto</p>}
        </div>
    )
}