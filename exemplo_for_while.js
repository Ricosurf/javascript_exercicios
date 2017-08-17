var senha = prompt("Digite sua senha:")

while(senha.length < 6){
  alert("Aew é 6 letras véio");
  senha = prompt("ERRO: Número de caracteres inválido. Digite outra senha.");
}

alert("Senha cadastrada com sucesso");

// for faz a mesma coisa que while, só que de forma diferente.
for(VARIAVEl_INICIO;CONDIÇÃO;MODIFICAÇÃO){
}

for(var valor = 0; valor <= 20; valor = valor + 1){
  console.log(valor);
}


var valor = 0; // variavel _inicio.
while(valor <=20){ // condição.
  console.log(valor);
  valor = valor + 1; //modificação (nesta linha poderia ter escrito valor++; significaria mesma coisa.)
}
