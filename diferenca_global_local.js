var valor = 10;

function misterio(){
  valor = 5;
}

misterio();

// Quanto vale a variável 'valor'?
// Resposta é 5.

var valor = 10;

function misterio(){
  var valor = 5;
}

misterio();

// Quanto vale a variável 'valor'?
// Resposta é 10.

function misterio(){
  var valor = 5;
}

misterio();

// Quanto vale a variável 'valor'?
// Resposta é Undefined.

function misterio(){
  valor = 5;
}

misterio();

// Quanto vale a variável 'valor'?
// Resposta é 5.

var c;

function soma(a,b){
  var soma = a + b;
  var c = soma
}

soma(10,15);

// Quanto vale a variável 'c'?
// Resposta é Undefined.

var c;

function soma(a,b){
  var soma = a + b;
  var c = soma
}

c = soma(10,15);

// Quanto vale a variável 'c'?
// Resposta é Undefined. Não tem return.

var c;

function soma(a,b){
  var soma = a + b;
  return soma;
}

c = soma(10,15);

// Quanto vale a variável 'c'?
// Resposta é 25.

var teste = 15;

function segredo(algum){
  teste = 10;
}

segredo(teste);

// Quanto vale a variável 'teste'?
// Resposta é 15.

var teste = 15;

function segredo(algum){
  teste = 10;
  return teste;
}

teste = segredo(teste);

// Quanto vale a variável 'teste'?
// Resposta é 10.

var teste = [1,2,3,4];

function eAgora(algumVetor){
  algumVetor[2] = "AAAAAAAA"
}

eAgora(teste){

}

// Quanto vale teste[0]? Resposta 1.
// Quanto vale teste[2]? Resposta "AAAAAAAA".
