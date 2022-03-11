// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 === true) {
    return true;
  } else {
    return false;
  }
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
let arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(arr) {
  let resultado = arr[arr.length - 1] + ', ' + arr[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
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
  } else if (dist2 < dist1) {
    return 'cat2';
  }
  return "os gatos trombam e o rato foge";
}


// Desafio 8
let array = [2, 15, 7, 9, 45];
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
