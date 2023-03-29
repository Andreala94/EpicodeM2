/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let x = 5;
let y = 10;

if (y > x){
  console.log("è maggiore")
} else {
  console.log("non è maggiore")
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let x = 5;

if(x==5){
  console.log("equal")
} else {
  console.log("not equal")
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


/* let x = 10;
let y = 5;

let resto =(x%y)

if( resto==0){
  console.log("divisible by 5")
} else {
  console.log("undivisible by 5")
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* let x=8;
let y=0;

let somma= x+y
let sottrazione= x-y

if((somma) || (sottrazione)){
  console.log("ok")
}else{
  console.log("no")
}
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let x = 10;
let y = 30;
let z = 15;

let totalShoppingCart = x + y + z

if(totalShoppingCart > 50){
  console.log("Spedizione gratuita")
}else{
  console.log("Costo spedizione 10")
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* let x = 10;
let y = 30;
let z = 15;


let carello = (x + y + z);
let totalShoppingCart = carello*0.8;


if(totalShoppingCart > 50){
  console.log("Spedizione gratuita")
}else{
  console.log("Costo spedizione 10")
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let x = 6;
console.log(typeof x) */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let x = 10;
let risultato = (x % 2);

if(risultato > 0){
  console.log("dispari")
}else {
  console.log("pari")
}*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

  /* let val = 4
if (val > 10) {
   console.log("Meno di 10");
} else if (val < 5) {
   console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
 }
 */

/*
let val = 10
if (val < 10) {
console.log("Meno di 10");
} else if (val < 5) {
console.log("Meno di 5");
} else {
console.log("Uguale a 10 o maggiore");
}
*/




/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


/* let val = 17
if (val < 5) {
    console.log("Tiny");
  } else if (val < 10) {
    console.log("Small");
   } else if (val < 15) {
      console.log("Medium");
  } else if( val < 20) {
    console.log("Large");
  } else if (val >= 20);
  console.log("Huge");
} */

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/


/*  let isMale = "si";

let gender = isMale=="si" ?(console.log ("male")):(console.log("female")); */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/


/*  let n=0, x=0;
while (n <6){
  console.log(n);
  n++;
}*/


/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* for(let step = 0; step <= 10; step++){
  console.log(step);
} */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* for (let i = 0; i <= 10; i++){
  if(i === 3){
    continue; }
  if(i === 8){
    continue; }
    
    console.log(i);
  }
 */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


/*
for (let i = 0; i <= 15; i++){
  if( i%2 == 0){
  console.log(i+"pari")
}else{
  console.log(i+"dispari")
}
}
 */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, 
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


/* for (let i = 1; i <= 100; i++){
  if((i%3==0) && (i%5==0)){
    console.log("fizzBuzz");
    continue;
  } else if(i%3==0){
    console.log("fizz");
    continue;
  } else if(i%5==0){
    console.log("buzz");
    continue;
  }
  console.log(i)
  
}  */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* let day = 1;

switch (day){
  case 1:
    console.log("lunedì");
    break;
  case 2:
     console.log("Martedì");
     break;
  case 3:
     console.log("Mercoledì");
     break;
  case 4:
     console.log("Giovedì");
     break;
  case 5:
     console.log("Venerdì");
     break;
  case 6:
     console.log("Sabato");
     break;
  case 7:
     console.log("Domenica");
     break;
     default:
      console.log("Valore non valido, inserirsci un numero da 1 a 7");
     
} */
