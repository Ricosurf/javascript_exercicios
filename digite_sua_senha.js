// Digite a sua senha

senha = prompt("Digite sua senha:")

while(senha.length < 6){
  alert("ERRO: Senha muito pequena");
  senha = prompt("Digite novamente.");
}

alert("Senha cadastrada com sucesso");
