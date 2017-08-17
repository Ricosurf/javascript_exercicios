function ligarDesliga(objeto) {
  objeto.ligado = !objeto.ligado; // esta linha inverte o valor do atributo e atribui a ele mesmo
}

var sala = {
  "sofa" : {
    "cor" : "preto",
    "material" : "algodao",
    "comprimento" : "30cm"
  },
  "rack" : {
    "material" : "madeira",
    "cor" : "marrom",
    "aberto" : false
  },
  "tv" : {
    "ligado" : false,
    "polegadas" : 89,
    "smart" : true
  },
  "luz" : {
    "ligado" : false,
    "cor" : "branca"
  },
  "ventilador" : {
    "ligado" : false
  },
  "estante" : [
    [
      {"titulo" : "Ele está de volta"},
      {"titulo" : "Homo Deus"}
    ],
    [
      {"titulo" : "Mochileiro das galaxias"}
    ],
    [
      {"titulo" : "Capitães da Areia"}
    ],
    [
      {"titulo": "Dom Casmurro"}
    ]
  ],
  "quadro" : "O Grito"
};

ligarDesliga(sala.tv); 