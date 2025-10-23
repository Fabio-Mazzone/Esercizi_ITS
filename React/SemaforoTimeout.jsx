import "./Semaforo.css";
import {useState,useEffect} from "react";

export default function SemaforoTimeout() {
    const [colore,setColore] = useState("red");

    // il timeout simula un comportamento asincrono
    useEffect(() => {
        const timer = setInterval(() => {
            setColore(prev => {
                if(prev === "red") return "yellow";
                if(prev === "yellow") return "green";
                return red;
            });
        }, 10000);

        // pulizia dell'intervallo quando il componente "viene smontato"
        return(() => clearInterval(timer));
    });

    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h2>Semaforo</h2>
        <div className="semaforo">
          <div className={`light red ${colore === "red" ? "on" : ""}`} />
          <div className={`light yellow ${colore === "yellow" ? "on" : ""}`} />
          <div className={`light green ${colore === "green" ? "on" : ""}`} />
        </div>
      </div>
    );
}