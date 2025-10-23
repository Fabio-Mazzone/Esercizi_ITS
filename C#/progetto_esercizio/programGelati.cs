

var builder = WebApplication.CreateBuilder(args);

// Configuro la policy CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .AllowAnyOrigin()   // permette qualsiasi origine
            .AllowAnyMethod()   // permette GET, POST, PUT, DELETE, ecc.
            .AllowAnyHeader();  // permette tutti gli headers
    });
});


var app = builder.Build();

app.UseHttpsRedirection();

//MOCK
List<Gelato> lista = new List<Gelato>()
{
    new Gelato(){
        Id = 1,
        Gusto = "Croccante all'amarena",
        Disponibile = 10,
        Acquistato = 1,
        Prodotto = 5,
        Prezzo = new Decimal(12.5)
    },
    new Gelato(){
        Id = 2,
        Gusto = "Gnutella",
        Disponibile = 8,
        Acquistato = 3,
        Prodotto = 9,
        Prezzo = new Decimal(11.5)
    },
};

app.MapGet("/api/gelati", () =>
{
    return Results.Ok(lista);
});

app.MapGet("/api/gelati/{codice}", (String codice) =>
{
    Gelato? gel = lista.Find(g => g.Codice == codice);

    if (gel == null)
        return Results.NotFound();

    return Results.Ok(gel);
});

app.MapPost("/api/gelati", (Gelato gel) =>
{
    if (gel.Gusto.Trim() == "")
        return Results.BadRequest();

    gel.Id = lista.Count + 1;

    lista.Add(gel);
    return Results.Ok();
});

app.UseCors("AllowAll");

app.Run();

/*
     * Progetto: Sviluppo di una API per la gestione del magazzino di una gelateria artigianale.
     *
     * Obiettivo:
     * Realizzare un sistema backend che consenta la gestione dei gusti di gelato disponibili, 
     * monitorando quantit�, produzione e vendite giornaliere.
     *
     * Requisiti funzionali:
     * - Elencare tutti i gusti di gelato disponibili.
     * - Per ogni gusto, gestire:
     *   - Quantità disponibile (numero di vaschette).
     *   - Quantità prodotta giornalmente.
     *   - Quantità acquistata giornalmente.
     *   - Prezzo al kg.
     * - Ogni gusto deve essere identificato da un codice univoco (UUID o altro formato), 
     *   utile per operazioni di aggiornamento, eliminazione o consultazione dettagliata.
     *
     * Requisiti tecnici:
     * - L'API deve esporre endpoint RESTful per le operazioni CRUD (Create, Read, Update, Delete).
     * - I dati possono essere gestiti in memoria o tramite un database relazionale (es. SQLite, PostgreSQL).
 */

