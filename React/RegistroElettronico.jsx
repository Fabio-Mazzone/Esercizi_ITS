import {useState, useEffect} from "react";
import {getAll, addItem, update, removeById} from './storage/localStorageRepo';
import './RegistroElettronico.css';

export default function ListaAlunni() {

    const [alunni, setAlunni] = useState([]);
    const [studentName, setStudentName] = useState("");
    const [studentSurname, setStudentSurname] = useState("");
    const [subjectName, setSubjectName] = useState("python");
    const [voti, setVoti] = useState(0);
    const [modalitaUpdate, setModalitaUpdate] = useState(false);
    const [idDaAggiornare, setIdDaAggiornare] = useState("");
    const [filtroSufficienti, setFiltroSufficienti] = useState(false);

    useEffect(() => {
        setAlunni(getAll());
    }, []); 

    function handleForm(e) {
        e.preventDefault();

        const dettagliAlunno = {
            studentName: studentName.trim(),
            studentSurname: studentSurname.trim(),
            subjectName: subjectName,
            voti: Number(voti)
        };

        if(modalitaUpdate && idDaAggiornare) {
            const next = update(idDaAggiornare, dettagliAlunno);
            setAlunni(next);
            setModalitaUpdate(false);
            setIdDaAggiornare("");
        } else {
            const next = addItem(dettagliAlunno);
            setAlunni(next);
        }

        setStudentName("");
        setStudentSurname("");
        setSubjectName("python");
        setVoti(0);
    }

    function handleEdit(item) {
        setModalitaUpdate(true);
        setIdDaAggiornare(item.id);
        setStudentName(item.studentName);
        setStudentSurname(item.studentSurname);
        setSubjectName(item.subjectName);
        setVoti(item.voti);
    }

    function handleDelete(id) {
        const next = removeById(id);
        setAlunni(next);
    }

    // Funzione di alto livello FILTER per voti sufficienti (≥ 18)
    const alunniFiltrati = filtroSufficienti 
        ? alunni.filter(alunno => alunno.voti >= 18)
        : alunni;

    return (
        <div>
            <h2>Registro Elettronico</h2>
            
            <form onSubmit={handleForm}>
                <div>
                    <label>Nome Studente</label>
                    <input 
                        type="text" 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Cognome Studente</label>
                    <input 
                        type="text" 
                        value={studentSurname}
                        onChange={(e) => setStudentSurname(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Materia</label>
                    <select 
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                    >
                        <option value="python">Python</option>
                        <option value="react">React</option>
                        <option value="java">Java</option>
                    </select>
                </div>
                <div>
                    <label>Voto</label>
                    <input 
                        type="number" min="0" max="30"
                        value={voti} 
                        onChange={(e) => setVoti(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit">
                    {modalitaUpdate ? "Aggiorna Valutazione" : "Invia Valutazione"}
                </button>
            </form>

            <div className="lista">
                <ul>
                    {alunniFiltrati.map((it) => (
                        <li key={it.id}>
                            {it.studentName} - {it.studentSurname} - {it.subjectName} - {it.voti}
                            <button className="elimina" onClick={() => handleDelete(it.id)}>
                                Elimina Valutazione
                            </button>
                            <button className="aggiorna" onClick={() => handleEdit(it)}>
                                Aggiorna Valutazione
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <button 
                    onClick={() => setFiltroSufficienti(!filtroSufficienti)}
                    style={{marginBottom: '20px', padding: '10px'}}
                >
                    {filtroSufficienti ? 'Mostra Tutti' : 'Mostra Solo Voti ≥ 18'}
                </button>
            </div>
        </div>
    );
}