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

// Formula
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Creare la bomb list
function createBomb() {
  bombList = [];
  while (bombList.length < 16) {
    const bombNumber = getRandomInt(1, Math.pow(numberGrid, 2));
    if (!bombList.includes(bombNumber)) {
      bombList.push(bombNumber);
    }
  }
  console.log(bombList);
}
//Creare la difficoltá da scegliere
function getGameMode() {
  let gameMode = document.getElementById('difficulty').value;

  if (gameMode == 'easy') {
    numberGrid = 10;
  } else if (gameMode == 'hard') {
    numberGrid = 9;
  } else {
    numberGrid = 7;
  }
  console.log(numberGrid);
  return numberGrid;
}
//Creare number grid
function getGrid(numberGrid) {
  gameWrapper.innerHTML = '';

  for (let i = 1; i <= Math.pow(numberGrid, 2); i++) {
    const squareWrapper = document.createElement('div');
    gameWrapper.append(squareWrapper);
    squareWrapper.classList.add('element');
    squareWrapper.style = `width: calc(100% / ${numberGrid}`;
    squareWrapper.append(i);
  }
}


