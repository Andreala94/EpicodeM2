/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

//  let me = {
//    name: 'Joh',
//    lastName: 'Doe',
//    skills: ['javascript', 'html', 'css'],  
  
// }
// me.skills.pop();
// console.log(me.skills);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
  // let dispari = [];

  //  for (let i = 1; i <= 100; i++) {
  //   if (i % 2 !== 0) {
  //      dispari.push(i);
  //    }
  //  }
  
  // console.log(dispari); // output: [1, 3, 5, 7, 9, ..., 97, 99]

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
 

//  let random = []
//  for (let i = 0; i < 10; i++){
//   let numeroCasuale = Math.floor(Math.random()*100);
//   random.push(numeroCasuale);
    
//  }
//  console.log(random);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
// let numList =[12,4,5,9,8,2,33,56,45];
// let evenList = [];

// for(let i = 0; i<numList.length; i++){
//    if(numList[i]%2===0){
//     evenList.push(numList[i]);
//   }
// }
// console.log(evenList);


/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
  // let lista =[12,4,5,9,8,2,33,56,45];
  // let modLista = lista.concat(10,12);
  // console.log(modLista);

  // let numList =[12,4,5,9,8,2,33,56,45];
  // let sumList = 0;
  // for(let i = 0; i < numList.length; i ++){
  //   sumList = sumList+ numList[i];
  // }
  // console.log(sumList);



/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
// let arrayNumeri = [2,7,9,10,14,22,31,34,48,55];
// let sumList = [];

// for(let i = 0; i< arrayNumeri.length; i++){
//   sumList.push(arrayNumeri[i] + 1)  ;
// }
// console.log(sumList);



/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/


  // let numList =[12,4,5,9,8,2,33,56,45];
  // let addList = [];

  // for(let i = 0; i < numList.length; i ++){
  //  if(numList[i]%2!==0){
  //     addList.push(numList[i]);
  //  }
  // }
  // console.log(addList);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

//   let randomList = [];
  

// while(randomList.length < 10 ){
//   let stockRandom = Math.floor(Math.random() * 11);
//   if(!randomList.includes(stockRandom)){
//     randomList.push(stockRandom);
//   }
// }

// console.log(randomList);



/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
// let pippo = ["EPICODE", "is", "great"];
// let arrayLenght = pippo.map(numero => numero.length);
// console.long(arrayLenght);


/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
// let listNumber = [1,3,5,6,8];
// let reverseNumber = listNumber.reverse();

// console.log(reverseNumber);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
// let listNumber = [1,3,5,6,8];

// let maxNumber = Math.max(...listNumber);

// console.log(maxNumber);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
 {
  Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
   Title: 'The Lord of the Rings: The Return of the King',
   Year: '2003',
   imdbID: 'tt0167260',
   Type: 'movie',
   Poster:
    'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
 },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
   Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
   },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
   imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
  Title: 'The Lord of the Rings',
   Year: '1978',
   imdbID: 'tt0077869',
  Type: 'movie',
   Poster:
     'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
     Year: '1990',
     imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
 },
  {
     Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
   Year: '1984',
   imdbID: 'tt0087365',
   Type: 'movie',
   Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
   {
     Title: 'Lord of the Flies',
    Year: '1963',
     imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
   },
  {
   Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
   },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
     'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
   {
    Title: 'Avengers: Endgame',
    Year: '2019',
   imdbID: 'tt4154796',
   Type: 'movie',
     Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/
// let anno= 3000;
// let pos;

// for (let i= 0; i<movies.length; i++){
//   if( movies[i].Year < anno){
//      console.log(movies[i].Year);
//      pos = i;

//   }
 
// }
   
// console.log("film piu vecchio: " + movies[ i]);


// let filmVecchio = movies.reduce((acc, cur) => acc.Year < cur.Year ? acc : cur);
// console.log(filmVecchio.Title);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

// console.log(movies.length);


/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
// let myTitle = movies[0].Title + " - " + movies[1].Title;
// console.log(myTitle);


// let titoliFilm = movies.map(film => film.Title);
// console.log(titoliFilm);


/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/



// let filmMillennio = movies.filter(film => film.Year >= 2000);
// console.log(filmMillennio);

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
// const id = 'tt0355702'
// console.log()

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/