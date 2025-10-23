
    // definire il nostro "db" localStorage
    const KEY = "lista";

    // andiamo a definire tutte le funzioni che ci permettono di interagire col db

    // funzione che legge gli item (elementi costruttivi) dal LocalStorage
    // nota: ricordare di inserire "export" per renderla utilizzabile da react

    export function getAll() {
        try {
            // qui utilizzo un metodo predefinito di localstorage per leggere gli elementi
            const raw = localStorage.getItem(KEY);
            return raw ? JSON.parse(raw) : [];

        } catch {
            return [];
        }
    }

    // definisco il metodo per il salvataggio dei dati

    export function saveAll(items) {
        localStorage.setItem(KEY, JSON.stringify(items));

    }

    // generiamo anche un id specifico

    export function generateId() {
        return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
        String(Date.now()) + "-" + Math.random().toString(16).slice(2);
    }

    // definire la funzione per aggiungere gli items al nostro DB

    export function addItem(item) {
        const all = getAll(); // leggere tutti gli item da LocalStorage

        // aggiungere il nuovo ID aggiornato per il nuovo elemento
        const ItemwithId = {...item, id:generateId()};
        const nextAdd = [ItemwithId, ...all]; // aggiunge l'elemento alla coda
        saveAll(nextAdd); // aggiorna (sovrascrivendo) i precedenti dati
        return nextAdd;
    }

    // funzione per aggiornare un item nel DB
    export function update(idToUpdate,patch) {
        const all = getAll();
        const nextUpdate = all.map(it=> it.id === idToUpdate ?
            {...it,...patch} : it);

        saveAll(nextUpdate);
        return nextUpdate;

    }

    // funzione per per eliminare un elemento dal DB
    export function removeById(idToRemove) {

        const all = getAll();
        const nextRemove = all.filter(it=> it.id !== idToRemove);

        saveAll(nextRemove);
        return nextRemove;

    }



