// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

sceltaUtente = prompt("pari o dispari?");
numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
numeroComputer = randomNumber1to5();
somma = numeroUtente + numeroComputer;
risultato = pariDispari(somma);

if (sceltaUtente == risultato) {
    console.log("Hai vinto!!");
} else {
    console.log("Hai perso!!");
}


function pariDispari(somma) {

    if (somma % 2 == 0) {
        return "pari";
    }
    
    return "dispari";
}

function randomNumber1to5() {
    var risultato = Math.floor(Math.random()*5)+1;
    return risultato;
}


console.log(sceltaUtente);
console.log(numeroUtente);
console.log(numeroComputer);
console.log(risultato);