const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");
const enviar = document.getElementById("enviar");
const verConvite = document.getElementById("ver-convite");

const nomesPermitidos = ["luciana", "osiel", "atecio","tecio", "sandra", "alexsandra", "alisson", "alexsan","juliana", "adriel", "tais", "thais", "diso", "disso", "deu", "leticia", "letícia", "larissa", "calhane", "preta", "cida", "nane","keto","anderson", "socorro", "michael", "mayara tauana", "may","claudio","mimi","nenéo","neneo","erica","guga", "vanda", "fia", "gilena", "alessandra", "clea", "cléa", "tita", "edilza", "vanda", "monica", "mônica", "nalva", "micheli", "neném", "nenem", "danilo", "clodoaldo", "kaka", "kaká", "gilton","jilton", "bebe", "bebé", "binha", "joeli", "alef", "iere", "irei", "juvan", "jilvan", "cléa","clea","benito","patricio","cleythelis","cleytelis","alexandre", "caboquinho", "vinícius", "vinicius","vinicios","xupinha","fia","leo","lidiane","gabriel","sisa","rafael","yasmim","yasmin","iasmin","iasmim","kacao","gabriel","gabriela","rafael","nilson","Nina","lalinha","deta","mônica","robison","robson"]; // nomes permitidos

const nomeAlan = ["alan"]; 
const nomeMayara = ["mayara"]; 
const nomeJessica = ["jessica"]; 
const nomeCamila = ["camila"]; 
const nomeRosa = ["rosa"]; 

enviar.addEventListener("click", () => {
  // recupera o valor do input "nome"
  valor = nome.value.toLowerCase();

  // limpa a mensagem
  mensagem.innerHTML = "";

  // limpa o botão "ver convite"
  const verConvite = document.getElementById("ver-convite");
  verConvite.style.display = "none";

  // verifica se o nome está na lista
  const estaConvidado = nomesPermitidos.includes(valor);
  // verifica se o nome está na lista de excluidos
  const alan = nomeAlan.includes(valor);
  const mayara = nomeMayara.includes(valor);
  const jessica = nomeJessica.includes(valor);
  const camila = nomeCamila.includes(valor);
  const rosa = nomeRosa.includes(valor);

  if (estaConvidado) {
    mensagem.innerHTML = "Você foi convidado";

    // mostra o botão "ver convite"
    verConvite.style.display = "block";

    // evento de clique no botão "ver convite"
    verConvite.addEventListener("click", () => {
      // abre a página com a imagem
      window.open("./convite.html");
    });
  } else if (alan) {
    mensagem.innerHTML = "Você não foi convidado, pois só deu 20 reais.";
  } else if (mayara) {
    mensagem.innerHTML = "Você não foi convidado, pois faz barulho e nada de dinheiro até agora.";
  } else if (jessica) {
    mensagem.innerHTML = "Você não foi convidado, pois quer levar aracaju inteiro.";
  } else if (camila) {
    mensagem.innerHTML = "Você não foi convidado, pois pedi muito.";
  } else if (rosa) {
    mensagem.innerHTML = "Você não foi convidado, pois é preguiçosa e não quer ajudar.";
  } else {
    mensagem.innerHTML = "Você não foi convidado.";
  }
});

// evento "keydown" do input "nome"
nome.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // código da tecla "enter"
    enviar.click();
  }
});