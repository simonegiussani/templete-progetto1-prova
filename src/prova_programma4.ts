
const OPERAZIONE_PRIMA = Number(prompt("Inerisci un numero tra 1 e 10"));
const OPERAZIONE_SECONDA = Number(prompt("Inserisci un numero tra 1 e 10"));
const OPERAZIONE_TERZA = Number(prompt("Inserisci un numero tra 1 e 10"));
const OPERAZIONE_QUARTA = Number(prompt("Inserisci un numero tra 1 e 10"));
const OPERAZIONE_QUINTA = Number(prompt("Inserisci un numero tra 1 e 10"));
const MEDIA = 5;

if (((OPERAZIONE_PRIMA >= 1) && (OPERAZIONE_PRIMA <= 10)) &&
    ((OPERAZIONE_SECONDA >= 1) && (OPERAZIONE_SECONDA <= 10)) &&
    ((OPERAZIONE_TERZA >= 1) && (OPERAZIONE_TERZA <= 10)) &&
    ((OPERAZIONE_QUARTA >= 1) && (OPERAZIONE_QUARTA <= 10)) &&
    ((OPERAZIONE_QUINTA >= 1) && (OPERAZIONE_QUINTA <= 10)))
{
    alert((OPERAZIONE_PRIMA + OPERAZIONE_SECONDA + OPERAZIONE_TERZA + OPERAZIONE_QUARTA + OPERAZIONE_QUINTA) / MEDIA);
}
else
{
    alert("hai inserito almeno un valore non valido. Riprova!");
}
