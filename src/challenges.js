// Desafio 1
function compareTrue() {

  let idadeMinima = 18;
  let NotaMinima = 8;
  let idade = 18;
  let nota = 8;

  if (idade >= idadeMinima && nota >= NotaMinima) {
    return true;
  } else {
    return false;
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
  resultado = wins * 3 + ties + ' ' + 'pontos!'
  return resultado;
}

// Desafio 6
let num = [0, 0, 0];
function highestCount() {
  let repeatNum = 0;
  for (let array of num) {
    if (array === Math.max(...num)) {
      repeatNum += 1;
    }
  }
  return repeatNum;
}

// Desafio 7
// Math.abs() pesquisa feita no MDN. retorna o valor absoluto do número passado não negativo;
function catAndMouse(cat1, mouse, cat2) {
  let dist1 = Math.abs(cat1 - mouse); 
  let dist2 = Math.abs(cat2 - mouse);
  let resultado = '';
  if (dist1 < dist2) {
    resultado = 'cat1';
  } else if (dist2 < dist1) {
    resultado = 'cat2';
  } else if (dist1 === dist2) {
    resultado = 'os gatos se trombam e o rato consegue fugir xD';
  }
  return resultado;
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
