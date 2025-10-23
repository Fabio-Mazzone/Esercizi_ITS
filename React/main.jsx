import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// necessario per prelevare il componente ESPORTABILE dal modulo stesso
import App from './App.jsx';

// import del nuovo componente creato
import Saluto from './Saluto.jsx';

// import del componente card
import Card from './Card.jsx';

// import del componente Luce
import Luce from './Luce.jsx';

// import del componente Lampadina
import Lampadina from './Lampadina.jsx';

// import del componente Semaforo
import Semaforo from './Semaforo.jsx';

// import del componente SemaforoTimeout
import SemaforoTimeout from './SemaforoTimeout.jsx';

// import del componente MostraMessaggio
import MostraMessaggio from './MostraMessaggio.jsx';

// import del componente Login
import Login from './Login.jsx';

import ListaForm from './ListaForm.jsx'

import ListaSpesa from './ListaSpesa.jsx';

import RegistroElettrnico from './RegistroElettronico.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistroElettrnico/>
  </StrictMode>,
)

export default App;