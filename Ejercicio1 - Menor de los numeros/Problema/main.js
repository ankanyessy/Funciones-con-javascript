var num1=parseInt(prompt("Ingrese primer numero"));
var num2=parseInt(prompt("Ingrese segundo numero"));
var num3=parseInt(prompt("Ingrese tercer numero"));
var miLista=[num1,num2,num3];

function menor(lista){
   var menor=lista[0];
   for(i=1;i<lista.length;i++){
      if(lista[i]<menor)
            menor=lista[i];
   }
return menor;
}alert(menor(miLista));
   

/*segundo metodo 

var numero1=parseInt(prompt("Ingrese primer numero: "));
var numero2=parseInt(prompt("Ingrese segundo numero: "));
var numero3=parseInt(prompt("Ingrese tercer numero: "));

if (numero1 == numero2 && numero1 == numero3){
   console.log("Los 3 numeros ingresados son iguales");
   }
   else{
      
      if (numero1<numero2){
         if (numero1<numero3){
            console.log("El numero menor ingresado es "+numero1+"");
            }
            else{
               console.log("El numero menor ingresado es "+numero3+"");
               }
      }
      else{
         if(numero1 > numero2){
            if (numero2 < numero3){
               console.log("El numero menor ingresado es "+numero2+"");
               }
               else{
                  console.log("El numero menor ingresado es "+numero3+"");
                  }
            }
         }
   }*/

   
   
   
