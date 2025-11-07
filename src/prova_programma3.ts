
// Con questa riga, chiedo all'utente il suo nome.//
const nome = prompt("Come ti chiami?");

// Con questa riga, stampo a video "Hello, world!".
alert("Hello, " + nome + "!");

const OPERAZIONE_PRIMA = Number(prompt("Inerisci un numero"));
const OPERAZIONE_SECONDA = Number(prompt("Inerisci un numero"));
const RISULTATO = (prompt("Inerisci un operatore numerico"));

if (RISULTATO == "+")
{
    alert(OPERAZIONE_PRIMA + OPERAZIONE_SECONDA);
}

if (RISULTATO == "-")
{
    alert(OPERAZIONE_PRIMA - OPERAZIONE_SECONDA);
}

if (RISULTATO == "*")
{
    alert(OPERAZIONE_PRIMA * OPERAZIONE_SECONDA);
}

if (RISULTATO == "/")
{
    alert(OPERAZIONE_PRIMA / OPERAZIONE_SECONDA);
}
