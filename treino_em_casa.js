/* Função de soma simples */
var a = 1
var b = 2

function soma(a,b){
  return a + b;
}

/* Função de diminuir simples */
var a = 10
var b = 5

function diminuir(a,b){
  return a - b;
}

/* Função de dividir simples */
var a = 10
var b = 5

function dividir(a,b){
  return a / b;
}

/* Função de multiplicar simples */
var a = 10
var b = 5

function multiplicar(a,b){
  return a * b;
}


/* Exemplo de if e else */
var uno = {
 "cor" : "azul",
 "ano" : 2000,
};
var corsa = {
 "cor" : "vermelho",
 "ano" : 2010,
};
var onix = {
  "cor" : "preto",
  "ano" : 2004,
};

function verificarCor(carro){
  if(carro.cor == "preto" || carro.ano >= 2004){
    return "Pode Comprar Este Carro.";
  }
  else{
    return "Não Compre Este Carro."
  }
}
