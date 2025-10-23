// il css inline (integrato nell'html) deve essere contenuto tra {{ }}

function Card({url_immagine,alt_immagine,nome,ruolo}) {
    return(
        <div style={{ backgroundColor:"lightgrey", border:"1px solid #333", margin:"20px", color:"black" }}>
            <img src={url_immagine} alt={alt_immagine} width="200" />
            <h2>{nome}</h2>
            <p>{ruolo}</p>
            <button>Vedi il mio CV</button>
        </div>
    )
}

export default Card;