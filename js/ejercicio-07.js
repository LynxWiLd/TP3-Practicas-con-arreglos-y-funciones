/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */
function tabla(numero) {
  document.writeln(`<h3>TABLA DE MULTIPLICAR DEL ${numero}</h3>`);
  for (let i = 0; i <= 10; i++) {
    document.writeln(`${numero} x ${i} = ${numero * i}<br>`);
  }
}

const numero = parseInt(
  prompt("Ingrese el numero para mostrar su tabla de multiplicar:")
);
tabla(numero);
