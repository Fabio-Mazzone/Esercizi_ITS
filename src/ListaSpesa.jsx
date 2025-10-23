/**
 * lista della spesa con seguenti dati
 * DATA/ORARIO - NOME PRODOTTO - CATEGORIA - NUMERO ARTICOLI
 *
 *
 * 3 CATEGORIE: CASA, ABBIGLIAMENTO, ELETTRONICA
 * A SECONDA DELLA CATEGORIA, CAMBIA IL COLORE DEL TESTO NELLA LISTA UL
 */

import {useState, useEffect} from "react";
 //import {getAll, saveAll, addItem, genId, update, removeById} from './storage/localStorageRepo';
import './ListaSpesa.css'
// alternativa ad import './storage/LocalStorageRepo', ma utilizzo import in maniera selettiva

const CATEGORIE = {
    casa: "cat-casa",
    abbigliamento: "cat-abbigliamento",
    elettonica: "cat-elettronica",
};

export default function ListaSpesa() {
    // 1° blocco: stato della lista, inizialmente vuota
    const [items,setItems] = useState([]);

    // 2° blocco: stato form
    const [date,setDate] = useState("");
    const [productName,setProductName] = useState("");
    const [categoryName,setCategoryName] = useState("casa");
    const [quantity, setQuantity] = useState(1);

    // 3° blocco: inserimento & modifica
    // modalitaUpdate inizialmente false perché sono in modalità inserimento
    // il form switcherà tra la modalità inserimento e la modalità modifica
    const [modalitaUpdate, setmodalitaUpdate] = useState(false);
    const [idDaAggiornare, setIdDaAggiornare] = useState("");

    // useEffect: utilizziamo la hook per il caricamento da LocalStorage
    useEffect(() => {
        setItems(getAll());
    },[]); // aggiungiamo [] per evitare il caricamento in loop

    function handleForm(e) {
        e.preventDefault(); // evita l'aggiornamento della pagina

        const dettagliProdotto = {
            date,
            productName: productName.trim(),
            categoryName: categoryName,
            quantity: Number(quantity)
        };

        // definiamo, a seconda del valore boolean di modalitaUpdate
        // le due situazioni: inserimento vs aggiornamento
        if(modalitaUpdate && idDaAggiornare) {
            // aggiornamento di un elemento già presente su localStorage
            const next = update(idDaAggiornare, dettagliProdotto);
            setItems(next);

            // devo uscire dalla modalità "aggiornamento"
            setmodalitaUpdate(false);
            setIdDaAggiornare(null);
        } else {
            // modalità inserimento nuovo oggetto
            const next = addItem(dettagliProdotto);
            setItems(next);
        }

        setDate("");
        setCategoryName("");
        setProductName("");
        setQuantity(1);
    }

    function handleEdit(item) {
        setmodalitaUpdate(true); // abilito la modalità update
        setIdDaAggiornare(item.id); // definisco l'id da aggiornare

        setDate(item.date);
        setProductName(item.productName);
        setCategoryName(item.categoryName);
        setQuantity(item.quantity);
    }

    function handleDelete(id) {
        const next = removeById(id);
        setItems(next);
    }

    return (
        <div>
            <h2>Lista della spesa</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label>Data/orario</label>
                    <input type="datetime-local" value={date}
                    onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Categoria</label>
                    {/*una volta scelto il valore dal dropdown della option selezionata, questo sarà relativo al campo categoryName, value definito nella select; quando selezionato, questo valore viene impostato attraverso il metodo setCategoryName */}
                    <select value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}>
                        <option value="casa">Casa</option>
                        <option value="abbigliamento">Abbigliamento</option>
                        <option value="elettronica">Elettronica</option>
                    </select>
                </div>
                <div>
                    <label>Nome prodotto</label>
                    <input type="text" value={productName}
                        onChange={(e) => setProductName(e.target.value)}required />
                </div>
                <div>
                    <label>Quantità</label>
                    <input type="number" min="1" value={quantity} onChange={(e)=> setQuantity(e.target.value)} required />
                </div>

                <button type="submit">Invia</button>
            </form>

            <div className={"lista"}>
                <ul>
                    {items.map((it) => (
                        <li key={it.id}>
                            {it.categoryName} - {it.productName} - {it.quantity}
                            <button className={"elimina"} onClick={() => handleDelete(it.id)}>
                                Elimina
                            </button>
                            <button className={"aggiorna"} onClick={() => handleEdit(it)}>
                                Aggiorna
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
