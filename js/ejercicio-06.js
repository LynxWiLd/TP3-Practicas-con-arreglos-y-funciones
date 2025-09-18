/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
 */
function perimetro(base, altura) {
  document.writeln(
    `El perimetro de su rectangulo es de ${2 * (base + altura)}`
  );
}

alert("CALCULEMOS EL PERIMETRO DE UN RECTANGULO");
const base = parseInt(prompt("Ingrese la Base:"));
const altura = parseInt(prompt("Ingrese la Altura:"));
perimetro(base, altura);
