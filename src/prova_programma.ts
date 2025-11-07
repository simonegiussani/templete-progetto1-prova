const MAGGIORE_ETA = 18;

// Con questa riga, chiedo all'utente il suo nome.
const nome = prompt("Come ti chiami?"); // Qui un altro commento.

// Con questa riga, stampo a video "Hello, world!".
alert("Hello, " + nome + "!");

let eta: number;
// eslint-disable-next-line prefer-const
eta = Number(prompt("Quanti anni hai?"));

if (eta > MAGGIORE_ETA)
{
    alert("👍");
}
// eslint-disable-next-line no-dupe-else-if
else if (eta > MAGGIORE_ETA)
{
    alert("");
}
else if (eta == MAGGIORE_ETA)
{
    alert("🔝");
}
else
{
    alert("🔞");
}

// alert(2025 - eta);

