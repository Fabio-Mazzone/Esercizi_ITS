import { useState } from 'react'
import reactLogo from './assets/react.svg' // sottocartella di src
import viteLogo from '/vite.svg' // cartella public
import './App.css'

// componente funzionale (non estende la classe React.component)
// struttura semplificata

// un componente in react è una funzione javascript
// che restituisce, ed inietta, il componente sotto formato JSX
// un formato molto simile all'html
function App() {
  // qui dentro ci sarà il codice JSX
  
  // all'interno del return è necessario almeno un div
  // per incapsulare tutto il codice JSX
  return (
    <div> 
      <div>
        <h1>Ciao, questa è la mia prima applicazione</h1>
        <p>Esempio di paragrafo!</p>
      </div>
    </div>
  )
}

// se manca la prossima riga, il componente non sarà esportabile verso
// il file index.jsx
export default App;
