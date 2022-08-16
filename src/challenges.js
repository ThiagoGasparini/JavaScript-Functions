// Desafio 1
function compareTrue(p1, p2) {
  if (p1 && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arr) {
  let resultado = `${arr[arr.length - 1]}, ${arr[0]}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties;
  return resultado;
}

// Desafio 6
function highestCount(num) {
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
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let push = [];
  for (let num of array) {
    if (num % 3 === 0 && num % 5 === 0) {
      push.push('fizzBuzz');
    } else if (num % 5 === 0) {
      push.push('buzz');
    } else if (num % 3 === 0) {
      push.push('fizz');
    } else {
      push.push('bug!');
    }
  }
  return push;
}

// Desafio 9
// .replace estudado em https://ricardo-reis.medium.com/string-replace-para-substituir-substrings-no-javascript-6db625e5fbc5
// o sinalizador global 'g' é usado para substituir todas as ocorrências da letra em questão!!!
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
  let msg = [];
  for (let i = 0; i < tech.length; i += 1) {
    let nameTech = {
      tech: tech[i],
      name,
    };
    msg.push(nameTech);
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return msg;
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
