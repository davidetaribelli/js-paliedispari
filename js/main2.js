
function palindrome(){
    //chiedo all'utente la parola che vuole inserire
    let word = prompt("Scegli una parola palindroma");
    // creo una stringa vuota dove inserire caratteri al contrario
    let reverse = "";
    // uso il contatore che mi conta le lettere della stringa inserita e le aggiunge all'array
    for (let i = word.length - 1; i >= 0; i--){
        const wordReverse = word[i];
        reverse += wordReverse;   
    }

    if(word == reverse){
        alert(`La parola ${word} è palindroma`);
    } else{
        alert(`La parola ${word} NON è palindroma`);
    }
}

let x = palindrome();
