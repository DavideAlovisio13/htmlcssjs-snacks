/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

let firstWord = prompt('digita la prima parola');
let secondWord = prompt('scrivi la seconda parola');
let arrFirstWord = [...firstWord];
let arrSecondWord = [...secondWord];
let result = document.getElementById('words');

if (arrFirstWord.length > arrSecondWord.length) {
    result.innerHTML = 'la parola più lunga è ' + firstWord +', mentre la più corta è ' + secondWord;
} else if (arrSecondWord.length > arrFirstWord.length) {
    result.innerHTML = 'la parola più lunga è ' + secondWord +', mentre la più corta è ' + firstWord;
} else {
    result.innerHTML = 'Le parola sono lunghe uguali';
}

console.log(arrFirstWord);
console.log(arrSecondWord);