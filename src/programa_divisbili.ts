// programma per fare in modo che se utente inserisce un numero divisibile per 3, ci saranno 10 numeri //
let inputUtente = Number(prompt("Inerisci un numero che può esser dvisibile per 3"));
let counter = 0;

while (counter < 10)
{
    if (inputUtente % 3 == 0)
    {
        console.log(inputUtente);

        counter += 1;
    }
    inputUtente += 1;
};

/*
// versione ottimizzata dello stesso programma//
while (input % 3 /= 0 )
{
    inputUtente +=1; // comando che serve per incrementare il codice di uno //
}

let count = 0;
while (count < 10)
{
    console.log(input);

    inputUtente += 3;
    inputUtente += 1;
}
*/

/*
// altra versione ancora più ottimizzata //
const MOLTIPLICATORE = Number(prompt("Inerisci il moltiplicatore "));
const resto = inputUtente = inputUtente % MOLTIPLICATORE;
if (resto =/ 0)
{
    inputUtente += (MOLTIPLICATORE - resto);
}

let cont = 0
whilte (cont < 10)
{
    console.log(inputUtente);

    counter += 1; 
    inputUtente += MOLTIPLICATORE;

} */
