/*scrivere un programma che: dati 2 numeri interi in input (da chiedere all'utente),
calcolare il m.c.m. tra i due. Dati 2 numeri interi in input (da chiedere all'utente), 
calcolare il M.C.D. tra i due*/

const numero1 = Number(prompt("Inserisci il numero primo"));
const numero2 = Number(prompt("Inserisci il numero secondo"));

/*  MCD */
let a = numero1;
let b = numero2;

while (b !== 0)
{
    const resto = a % b;
    a = b;
    b = resto;
}

const mcd = a;

/* MCM */
const mcm = (numero1 * numero2) / mcd;

console.log("MCD = " + mcd);
console.log("MCM = " + mcm);


/*let isPrime = false;
let value = input;

while (!isPrime)
{
    isPrime = true;
    
    if (value % 2 == 0) { isPrime = false; }
    else{

        let divisor = 3;
        while ((isPrime) && (divisor <= Math.sqrt(value)))
        {
            if(value % divisor == 0) { isPrime = false; }
            divisor += 2;
        }
    }
    value += 1;
}*/