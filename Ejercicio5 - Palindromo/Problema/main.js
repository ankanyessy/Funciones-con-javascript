var fraseUsuario=prompt("Escribe una frase para saber si es Palidromo");
var frase_reversa;

function frasePalindromo(fraseUsuario){
  	// Convierto la frase a minusculas y quito espacios
  	fraseUsuario=fraseUsuario.toLowerCase().replace(/\s/g,"");
    /* Creo otra frase y lo convierto en array, luego convierto el array en string*/
    frase_reversa=fraseUsuario.split("").reverse().toString();
      
    for (var i=0;i<((frase_reversa.length)-1); i++) {
        frase_reversa=frase_reversa.replace(",","");
    };
    if(fraseUsuario==frase_reversa){
        resultado="es un Palindromo";
    }else{
        resultado="no es un Palindromo";
      }
      alert("Tu frase "+resultado+" , es decir se lee de izquierda a derecha y viceversa");
    }frasePalindromo(fraseUsuario);


