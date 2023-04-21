
// chiedo all'utente se vuole pari o dispari
let sceltaUtente = prompt(`Scegli tra pari o dispari`);
let numeroUtente = parseInt(prompt(`Scegli un numero da 1 a 5`));

console.log("Numero utente", numeroUtente);
// creo una funzione che mi genera un numero random per il pc
function getRandomNumberInRange(min, max) {
    let numero;

    numero = Math.floor( Math.random() * (max - min + 1) + min );

    return numero;
}
// dichiaro una variabile globale
let numeroCasuale;
// il ciclo avverrà una volta sola, per generare il mio numero uso la funzione scritta precedentemente
for (let i = 0; i <= 0 ; i++) {
    
    numeroCasuale = getRandomNumberInRange(1,5);
    console.log("numero del pc", numeroCasuale);
    
}
// uso una funzione per far sommare i due numeri
function sommaDeiNumeri (num, num2){
    let somma = num + num2;
    
    return somma;
}

let tot = sommaDeiNumeri(numeroCasuale, numeroUtente);

console.log("il totale è: ", tot);

// ora devo vedere se il risultato è pari o dispari

function isPari(number) {

    let risultato = false;

    if(number % 2 == 0) {
        risultato = true;
        console.log("Ha vinto pari");
    } else{
        console.log("Ha vinto dispari");
    }


    return risultato;
}

let win = isPari(tot);














