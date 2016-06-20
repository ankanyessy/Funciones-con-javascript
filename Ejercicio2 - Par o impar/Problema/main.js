
var num=parseInt(prompt("Ingrese numero"));
var resultado=parImpar(num);

alert("El numero  " + num + " es  " +resultado);
   
function parImpar(num){
	if(num%2===0){
		return "par";
	}else{
		return "impar";
	}
}



