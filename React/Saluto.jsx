// nuovo componente Saluto

// componente che riceve una prop

// componente che riceve in maniera dinamica da una prop
function Saluto(props) {
    // props è un oggetto che contiene i dati passati al componente
    return (
        <div>
            <h2>Ciao, {props.nome}</h2>
        </div>
    )
}

// esportazione del modulo/componente necessaria:
export default Saluto;