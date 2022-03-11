// Desafio 1
function compareTrue() {

  let idadeMinima = 18;
  let NotaMinima = 8;
  let idade = 18;
  let nota = 8;

  if (idade >= idadeMinima && nota >= NotaMinima) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultArea = (base * height) / 2;

  let resultado = {
    area: resultArea,
  }
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ");
  return resultado;
}

// Desafio 4
let arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arr) {
  let resultado = arr[0] + ',' + ' ' + arr[arr.length - 1];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return resultado = wins * 3 + ties + ' ' + 'pontos!'
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
