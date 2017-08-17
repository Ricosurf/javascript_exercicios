/*
Arquivo de exemplo javascript Mastertech
*/

var usuarios = [];

usuarios[0] = {
  "username" : "Renan",
  "password" : "aviao1"
};

usuarios[1] = {
  "username" : "Ana",
  "password" : "aviao12"
};

usuarios[2] = {
  "username" : "Joao",
  "password" : "aviao123"
};


//Função para verificar ID, nome e senha
// Utiliza o vetor "usuarios"

function verificar(id, nome, senha){
  return usuarios[id].username == nome && usuarios[id].password == senha;
}

verificar(0, "Renan", "aviao")


verificar(2, "Joao", "aviao123")
