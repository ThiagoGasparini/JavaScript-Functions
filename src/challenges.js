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
let array = [2, 15, 7, 9, 45]
function fizzBuzz(array) {
  let puxar = [];
  for (let num of array) {
    if (num % 15 === 0) {
      puxar.push('fizzBuzz');
    } else if (num % 5 === 0) {
      puxar.push('buzz');
    } else if (num % 3 === 0) {
      puxar.push('fizz');
    } else {
      puxar.push('bug!');
    }
  }
  return puxar;
}

// Desafio 9
// .replace estudado em https://pt.stackoverflow.com/questions/529882/como-substituir-uma-letra-por-um-n%C3%BAmero-em-uma-string-em-javascript
function encode(word) {
  word = word.replace(/a/g, '1'); 
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}

function decode(word) {
  word = word.replace(/1/g, 'a'); 
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
}


// Desafio 10
// .sort estudado em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(tech, name) {
tech.sort();
  let message = [];
  for (let i = 0; i < tech.length; i += 1) {
    let nameTech = {
      tech: tech[i],
      name: name,
    };
    message.push(nameTech);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return message;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'Javascript'], 'Lucas'));

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
