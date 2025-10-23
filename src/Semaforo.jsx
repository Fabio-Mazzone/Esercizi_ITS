import { useState } from "react";
import "./semaforo.css";

export default function Semaforo() {
  const [colore, setColore] = useState("red");

  const cambiaColore = () => {
    if (colore === "red") setColore("yellow");
    else if (colore === "yellow") setColore("green");
    else setColore("red");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Semaforo</h2>
      <div className="semaforo">
        <div className={`light red ${colore === "red" ? "on" : ""}`} />
        <div className={`light yellow ${colore === "yellow" ? "on" : ""}`} />
        <div className={`light green ${colore === "green" ? "on" : ""}`} />
      </div>
      <button onClick={cambiaColore} style={{ marginTop: 20 }}>
        Cambia colore
      </button>
    </div>
  );
}