// Imprime los números pares entre dos números que introduzca el usuario

function numerosPares(primerNumero, segundoNumero) {
  for(let i = primerNumero; i <= segundoNumero; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

numerosPares(15, 33)