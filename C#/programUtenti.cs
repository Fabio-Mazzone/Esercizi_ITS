using its_32_lez03_crud.Classi;
using System.Collections;

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

List<Studente> lista = new List<Studente>()
{
    new Studente(){ Id = 1, Nome = "Giovanni", Cognome = "Pace", Matricola = "AB12345" },
    new Studente(){ Id = 2, Nome = "Valeria", Cognome = "Verdi", Matricola = "AB12346" },
    new Studente(){ Id = 3, Nome = "Marika", Cognome = "Mariko", Matricola = "AB12347" },
};

app.MapPost("/api/studenti", (Studente stu) =>
{
    stu.Id = lista.Count + 1;

    lista.Add(stu);
    return Results.Ok();
});

app.MapGet("/api/studenti", () =>
{
    return Results.Ok(lista);
});

app.MapGet("/api/studenti/{matricola}", (String matricola) =>
{
    Studente? stu = lista.Find(s => s.Matricola == matricola);
    return Results.Ok(stu);
});

app.UseCors("AllowAll");

app.Run();

/*
     * Progetto: Sviluppo di una API per la gestione del magazzino di una gelateria artigianale.
     *
     * Obiettivo:
     * Realizzare un sistema backend che consenta la gestione dei gusti di gelato disponibili, 
     * monitorando quantità, produzione e vendite giornaliere.
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