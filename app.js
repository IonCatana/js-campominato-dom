// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81 con
// difficoltà 3 => tra 1 e 49

// Creare le variabili
const gameWrapper = document.getElementById('wrapper'); 
let numberGrid;
let bombList = [];
let result = document.querySelector('.result');
let score = 0;