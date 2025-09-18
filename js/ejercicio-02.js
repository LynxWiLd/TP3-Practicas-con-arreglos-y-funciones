/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
 */

const ciudades = [];
let ciudad;
do {
  ciudad = prompt("Ingrese el nombre de una ciudad (Cancelar para finalizar):");
  if (ciudad !== null && ciudad.trim() !== "") {
    ciudades.push(ciudad.trim()); // Agregar ciudad al arreglo si no es nula o vacía
  }
} while (ciudad !== null);
console.log(ciudades);
//Mostrar la longitud del arreglo.
document.writeln(
  `<p>El arreglo de ciudades tiene: ${ciudades.length} elementos</p>`
);
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.writeln(`<ul>`);
if (ciudades.length >= 1) {
  document.writeln(`<li>`);
  document.writeln(`<p>Primera ciudad: ${ciudades[0]}</p>`);
  document.writeln(`</li>`);
}
if (ciudades.length >= 3) {
  document.writeln(`<li>`);
  document.writeln(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
  document.writeln(`</li>`);
}
if (ciudades.length >= 1) {
  document.writeln(`<li>`);
  document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);
  document.writeln(`</li>`);
}
//Escribe por pantalla el elemento que ocupa la segunda posición.
if (ciudades.length >= 2) {
  document.writeln(`<li>`);
  document.writeln(`<p>La segunda ciudad es: ${ciudades[1]}</p>`);
  document.writeln(`</li>`);
}

ciudades.push("París");

if (ciudades.length >= 1) {
  document.writeln(`<li>`);
  document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);
  document.writeln(`</li>`);
}
document.writeln(`</ul>`);

//Añade en última posición la ciudad de París.

if (ciudades.length >= 1) {
  document.writeln(`<br>`);
  document.writeln(`<li>`);
  document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);
  document.writeln(`</li>`);
}
document.writeln(`</ul>`);

//Mostrar el arreglo generado
document.writeln(`<h3>Arreglo de Ciudades:</h3>`);
for (let i = 0; i < ciudades.length; i++) {
  if (ciudades[i] !== null) {
    document.writeln(`<ul>`);
    document.writeln(`<li>`);
    document.writeln(`<p>${ciudades[i]}</p>`);
    document.writeln(`</li>`);
    document.writeln(`</ul>`);
  }
}
