// Imprime los números entre 20 y 50, ambos incluidos, en orden DESCENDENTE

let pares = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
;

let pares_reversed = pares.filter(par => par % 2 === 0).reverse()

console.log(pares_reversed)