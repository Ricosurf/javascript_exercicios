/*Escreva uma função que retorne a soma dos números contidos no vetor.
Dado o seguinte vetor como exemplo:
var numeros = [2,0,10,90,120,2];*/

var vetor = [5, 10, 50, 20];

function somaVetor(vetor){
	var soma = 0;
 	for (var i = 0; i < vetor.length; i++) {
    	soma = soma + vetor[i];
  	}

  return soma;
}


/* Dados A e B, elaborar um código para listar todos os múltiplos de A inferiores a B.
	Obs: para um número ser múltiplo de A, o resto da divisão desse número por A
deve ser igual a zero. */

var a = Number(prompt('Digite o valor de A:'));
var b = Number(prompt('Digite o valor de B:'));
var multiplo = a;

while(multiplo < b){
    if(multiplo % a == 0){
        console.log(multiplo);
    }
    multiplo++;
}
console.log('Fim.');


/* Elabore um programa que informa ao usuário se um ano digitado é bissexto ou não. Seu programa deve fazer a chamada para a função Bissexto, que recebe como parâmetro um ano e exibe no console uma string, informando se o ano é bissexto ou não.
Sabe-se que um ano é bissexto se o ano for divisível por 400. */

function verificaBissexto(){
  var data = prompt("Digite um ano para descobrir se ele é bissexto: ");
  if ( (data % 4 == 0 && data % 100 != 0) || (data % 100 == 0 && data % 400 == 0) ){
    console.log(data + ": é bissexto");
  } else{
    console.log(data + ": não é bissexto!");
  }
}

/* Faça uma função que recebe um número(n) e imprima uma escada de tamanho n usando o símbolo #.
Ex: Considere uma escada de tamanho N=4
#
##
###
####

Observe que sua base e altura são iguais, e a imagem é desenhada usando # */

var numeroDegrau = Number(prompt("Digite o numero de degraus! :') "));

for (var i = 1; i <= numeroDegrau; i++) {
   for(var jogoDaVelha = 1; jogoDaVelha <= numeroDegrau - (numeroDegrau-i); jogoDaVelha++){
           document.write("#");
   }
   document.write("<br />");
}
