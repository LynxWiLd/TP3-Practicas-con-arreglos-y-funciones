/* 
   Escribir un script que simule el lanzamiento de dos dados. 
1) Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
2) Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
let arraySuma = [];
for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  console.log(dado1);
  const dado2 = Math.floor(Math.random() * 6) + 1;
  console.log(dado2);
  arraySuma[i] = dado1 + dado2;
}
document.writeln(arraySuma);
