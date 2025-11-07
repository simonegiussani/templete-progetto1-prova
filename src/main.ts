let isValid = true;

let indice = 0;
let somma = 0;

while ((isValid) && (indice < 5))
{
    const numero = Number(prompt("Inserisci il voto."));
    if ((numero < 1) || (numero > 10))
    {
        isValid = false;

        alert("Il numero inserito non è valido.");
    }
    else
    {
        somma += numero;
    }

    indice += 1;
}

if (isValid)
{
    alert("La media dei voti è: " + (somma / 5));
}
else
{
    alert("Hai inserito almeno un valore non valido. Riprova.");
}
