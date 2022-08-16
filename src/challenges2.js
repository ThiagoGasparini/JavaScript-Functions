// Desafio 11

function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < Math.abs(lineB - lineC) // Math.abs retorna numero inteiro positivo
    || lineB < Math.abs(lineA - lineC) // comando 'OU'
    || lineC < Math.abs(lineA - lineB)
  ) {
    // comando 'OU'
    return false;
  }
  return true;
}

module.exports = {
  triangleCheck,
};
