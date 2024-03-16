/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

let firstNumb = parseInt(prompt('inserisci il primo numero'));
let secondNumber = parseInt(prompt('inserisci secondo numero'));
let result = document.getElementById('result')

// if (firstNumb > secondNumber) {
//     result.innerHTML = firstNumb;
//     console.log (result);
// } else if (secondNumber > firstNumb) {
//     result.innerHTML = secondNumber;
//     console.log(result);
// } else {
//     result.append('hai inserito due numeri uguali!')
// }

result.innerHTML = (firstNumb > secondNumber) ? firstNumb : secondNumber;
console.log(result);

if (firstNumb === secondNumber) {
    result.append('hai inserito due numeri uguali!')
}
