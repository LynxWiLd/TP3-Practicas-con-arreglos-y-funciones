/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */
function mayomin(cadena) {
  // Si la cadena es igual a su versión en mayúsculas
  if (cadena === cadena.toUpperCase()) {
    document.writeln("La cadena está formada solo por MAYÚSCULAS");
  }
  // Si la cadena es igual a su versión en minúsculas
  else if (cadena === cadena.toLowerCase()) {
    document.writeln("La cadena está formada solo por minúsculas");
  }
  // Si no es igual a ninguna de las anteriores, es mezcla
  else {
    document.writeln("La cadena tiene una mezcla de MAYÚSCULAS y minúsculas");
  }
}

let cadena = prompt("Ingrese un texto:");
mayomin(cadena);
