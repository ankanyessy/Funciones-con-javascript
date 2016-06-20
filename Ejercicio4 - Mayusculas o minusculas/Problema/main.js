var texto1=prompt("Ingrese una frase");

function info(texto1) {
 
  var resultado = "La texto1 \""+texto1+"\" ";
 
  // Comprobar mayúsculas y minúsculas
  if(texto1 == texto1.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }
  else if(texto1 == texto1.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }
  else {
    resultado += " está formada por mayúsculas y minúsculas";
  }
  return resultado;
}console.log(resultado);






