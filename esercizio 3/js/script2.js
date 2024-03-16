/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */
let sum = 0; 
let number = ''; 

for (let i = 1; i <= 10; i++) {
  number = parseInt(prompt("Inserisci un numero: ")); 
  sum += number; 
}

console.log(sum);