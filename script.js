const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

function carregaDicionario() {
  var biografias /* Armazena o conjunto de objetos*/ = {
    bio01: {
      nome: "Valerie Laverne Thomas",
      imagem: "https://primeirosnegros.b-cdn.net/wp-content/uploads/2021/10/topo-fonte-nasa-1138x1536.jpg",
      descricao:"Em 1970, foi designada para supervisionar a criação do programa Landsat – primeiro satélite da NASA capaz de tirar fotos da Terra. Sua tarefa era desenvolver um programa capaz de traduzir e mapear os dados brutos e complexos do equipamento em padrões simples para que os cientistas pudessem tanto usá-los como estudá-los. Antes de se aposentar em 1995, a física criou um programa que permitiu aos cientistas estudar o cometa Halley, a camada de ozônio e apoiar a criação da espaçonave Voyager com sondas robóticas.",
      fonte: "https://primeirosnegros.com/valerie-thomas-os-espelhos-a-ilusao-e-o-3d/"
    },

    bio02: {
      nome: "Mary Jackson",
      imagem:"https://super.abril.com.br/wp-content/uploads/2020/06/26-06_maryJackson_SITE.jpg?quality=90&strip=info&w=1024&h=682&crop=1",
      descricao: "Mary Jackson se formou em 1942 e trabalhou por décadas como engenheira aeroespacial na NASA, Mary Jackson se formou em matemática e física e após algumas experiências fora da área por falta de oportunidades devido ao apartheid ela conseguiu uma vaga no Langley Research Center e trabalhava numa área segregada em que os cálculos de engenharia aeronáutica hoje feitos por computador, eram realizados por mentes humanas. Em 1958 ela se tornou a primeira mulher negra com o cargo de engenheira da NASA.",
      fonte: "https://super.abril.com.br/historia/quem-foi-mary-jackson-a-cientista-negra-cujo-nome-batizara-a-sede-da-nasa/"
    },

    bio03: {
      nome: "alguém aqui",
      imagem:"http://placekitten.com/200",
      descricao:"Informações sobre ela aqui",
      fonte: " "
    },

    bio04: {
      nome: "alguém aqui",
      imagem:"http://placekitten.com/200",
      descricao:"Informações sobre ela aqui" ,
      fonte: " " 
    },
  };

  var content /*Armazenando o conteúdo da section*/ = document.getElementById("content");/* Isso sinaliza que eu estou pegando o conteúdo através */

  for /*Criando laço de repetição*/ (var bio in biografias) {

    content.innerHTML /**/ */ += /*Faz atribuições e valores dentro da variável bio*/

      '<div class="card">' +

      '<img src="' +

      biografias[bio/*A Variável bio faz com que o for percorra todas as informações de dentro da array */ ].imagem +

      '"/>' +

      "<details>" +

      "<summary>" +

      biografias[bio].nome +

      "</summary>" +

      "<p>" +

      biografias[bio].descricao +

      "</p>" +

      '<a href="' +

      biografias[bio].fonte +

      '">Fonte</a>' +
      
      "</details></div>" 

  }
}

carregaDicionario()