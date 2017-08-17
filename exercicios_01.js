/* Exercicio 01 - Modificar o programa de verificar senha para que o usuário possa tentar somente
  quatro vezes. Caso ele falhe, deverá ser mostrado um alerta de erro. */

var tentativas = 1;
senha = prompt("Digite sua senha:")

while(senha.length < 6 && tentativas <= 4){
  alert("ERRO: Senha muito pequena!");
  senha = prompt("Digite novamente.");
  tentativas = tentativas +1; //Ou tentativas ++;
}

if(tentativas <= 4){
  alert("Senha cadastrada com sucesso!!!");
}
else{
  alert("Número de tentativas esgotado.");
}

// Outra resoluçÃo

var tentativas = 3;
var senha = prompt("Digite sua senha:");

while(senha.length < 6 && tentativas > 0){
 alert("ERRO: Senha muito pequena");
 senha = prompt("Digite novamente. Você tem " + tentativas + " chances.");
 tentativas--;
}

if(tentativas > 0){
  alert ("Senha cadastrada com sucesso");
}
else{
  alert("Número de tentativas esgotado");
}

/* Exercicio 02 - - Criar uma função que recebe um vetor, usando FOR. Mostrar cada uma das posições do vetor
no console com seu respectivo valor, assim:
vetor1 = ["a","e","i",0,true];  vetor2 = [true, true, true, true, "mentiroso", true];
vetor3 = ["Pera", "Uva", "Maçã", "Graviola, tá pensando o que?"];
sua_funcao(vetor1) mostra:
0 : "a"
1 : "e"
2 : "i"
3 : 0
4 : true */

var vetor1 = ["a","e","i",0,true];
var vetor2 = [true, true, true, true, "mentiroso", true];
var vetor3 = ["Pera", "Uva", "Maçã", "Graviola, tá pensando o que?"];

// for(inicio;condiçao;final)

function mostrarVetor(entrada){
  for(var posicao = 0; posicao < entrada.length; posicao++){
  console.log(posicao + " : " + entrada[posicao]);
  }
}

mostrarVetor(vetor1); // Como chamar a função no Console do Chrome.

/* Exercicio 03 - - Escreva uma função que recebe um usuário (objeto) e um valor de empréstimo. As regras para
  empréstimo aprovado são:
  - Idade entre 20 e 65 anos,
  - Renda mensal maior que 2000 reais,
  - Valor do empréstimo menor que 20% da renda da pessoa.
  Dois objetos (pessoas) são fornecidos para teste:
var joao = {
  'idade': 35,
  'renda': 3500
};
var jose = {
  'idade': 25,
  'renda': 15.99
};
var maria = {
  'idade': 18,
  'renda': 6000
};
Por exemplo, sua_funcao(joao,500) deve retornar "Aprovado" e sua_funcao(maria,100)
  deve retornar "Reprovado". */

var joao = {
  'idade': 35,
  'renda': 3500
};
var jose = {
  'idade': 25,
  'renda': 15.99
};
var maria = {
  'idade': 18,
  'renda': 6000
};

function verificarCredito(cliente, valor){
  if(cliente.idade >= 20 && cliente.idade <= 65 && cliente.renda > 2000 && valor < cliente.renda*0.2){
    return "Aprovado! Empréstimo Concedido!";
  }
  else{
    return "Reprovado... Procure Nossos Gerentes."
  }
}

verificarCredito(joao, 300); // Como chamar a função no Console do Chrome.

/* Exercicio 04 - Organize o código a seguir e procure explicar o que ele faz.
function getRandom(max){var resultado=Math.floor(Math.random()*max+1);returnresultado;}*/

function getRandom(max){
  var resultado = Math.floor(Math.random()*max + 1);
  return resultado;
}
