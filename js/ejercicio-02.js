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
  ciudades.push(ciudad);
} while (ciudad !== null);
//Añade en última posición la ciudad de París.
ciudades.push("París");
console.log(`<p>Ciudad añadida al final: París [${ciudades}]</p>`);
//Mostrar el arreglo generado
document.writeln(`<h1>Ciudades Ingresadas:</h1>`);
document.writeln(`<p>[${ciudades}]</p>`);
//Mostrar la longitud del arreglo.
document.writeln(`<p>Longitud del arreglo: ${ciudades.length}</p>`);

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
if (ciudades.length >= 1) {
  document.writeln(`<p>Primera ciudad: ${ciudades[0]}</p>`);
}
if (ciudades.length >= 3) {
  document.writeln(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
}
if (ciudades.length >= 1) {
  document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);
}
//Escribe por pantalla el elemento que ocupa la segunda posición.
if (ciudades.length >= 2) {
  document.writeln(`<p>Ciudad en la segunda posición: ${ciudades[1]}</p>`);
}
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
if (ciudades.length >= 2) {
  const ciudadAnterior = ciudades[1];
  ciudades[1] = "Barcelona";
  document.writeln(
    `<p>Ciudad en la segunda posición sustituida: ${ciudadAnterior} por Barcelona</p>`
  );
  document.writeln(`<p>Nuevo arreglo de ciudades: [${ciudades}]</p>`);
} else {
  document.writeln(`<p>No hay segunda posición para sustituir.</p>`);
}
