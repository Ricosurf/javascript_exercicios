var nome = prompt("Digite seu nome");

function colocarNome(){
  var minhaDiv = document.getElementById("exemplo");
  minhaDiv.innerHTML = nome;
}

window.onload = function(){
  colocarNome();
}
