/* 
   Escribir un script que simule el lanzamiento de dos dados. 
1) Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
2) Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
let arraySuma = [];
let apariciones = [];
for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  arraySuma[i] = dado1 + dado2;
  for (let j = 0; j < 50; j++) {
    if (arraySuma[i] === arraySuma[j]) {
      apariciones[i] = (apariciones[i] || 0) + 1;
    }
  }
}

document.writeln(`<table class="border padding">`);
document.writeln(`<thead>`);
document.writeln(`<tr>`);

document.writeln(`<th class="border"> Suma </th>`);
document.writeln(`<th class="border"> Apariciones </th>`);

document.writeln(`</tr>`);
document.writeln(`</thead >`);

document.writeln(`<tbody>`);
for (let i = 0; i < 50; i++) {
  document.writeln(`<tr>`);

  document.writeln(`<td class="border">${arraySuma[i]}</td>`);
  document.writeln(`<td class="border">${apariciones[i]}</td>`);

  document.writeln(`</tr>`);
}
document.writeln(`</tbody>`);

document.writeln(`</table>`);
