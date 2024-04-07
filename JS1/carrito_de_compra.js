// CARRITO DE LA COMPRA: 
// Se le pide al usuario el precio de 5 productos. 
// Se calcula el total. 
// En el caso de sumar 100 euros o más, se le da un descuento del 15%. 
// Imprimir en tal caso el precio original y el precio final con el descuento. 
// Si no, solo el precio total. 
// Nota: te servirá crear una variable que vaya acumulando el precio total a medida que se vayan introduciendo precios


function sumar(sum1, sum2, sum3, sum4, sum5) {
    let resultado = sum1 + sum2 + sum3 + sum4 + sum5;
    
    if (resultado > 100) {
      let descuento = (resultado * 15) / 100;
      console.log("Su total es mayor a " + 100 + ", tiene un descuento de: " + descuento);
      console.log("Su total es de = " + resultado)
      console.log("Su total con descuento es de = " + (resultado - descuento))
      return resultado - descuento;
    } else {
      console.log("Su total es de = " + resultado)
      return resultado;
    }
}

sumar(1,4,2,94,5)