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
      descricao: "Em 1970, foi designada para supervisionar a criação do programa Landsat – primeiro satélite da NASA capaz de tirar fotos da Terra. Sua tarefa era desenvolver um programa capaz de traduzir e mapear os dados brutos e complexos do equipamento em padrões simples para que os cientistas pudessem tanto usá-los como estudá-los. Antes de se aposentar em 1995, a física criou um programa que permitiu aos cientistas estudar o cometa Halley, a camada de ozônio e apoiar a criação da espaçonave Voyager com sondas robóticas.",
      fonte: "https://primeirosnegros.com/valerie-thomas-os-espelhos-a-ilusao-e-o-3d/"
    },

    bio02: {
      nome: "Mary Jackson",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg",
      descricao: "Mary Jackson se formou em 1942 e trabalhou por décadas como engenheira aeroespacial na NASA, Mary Jackson se formou em matemática e física e após algumas experiências fora da área por falta de oportunidades devido ao apartheid ela conseguiu uma vaga no Langley Research Center e trabalhava numa área segregada em que os cálculos de engenharia aeronáutica hoje feitos por computador, eram realizados por mentes humanas. Em 1958 ela se tornou a primeira mulher negra com o cargo de engenheira da NASA.",
      fonte: "https://super.abril.com.br/historia/quem-foi-mary-jackson-a-cientista-negra-cujo-nome-batizara-a-sede-da-nasa/"
    },

    bio03: {
      nome: "Gladys Mae West",
      imagem: "https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2021/12/Design-sem-nome-2.jpg",
      descricao: "Nascida em 1930 no estado da Virgínia, nos Estados Unidos. No ano de 1956, foi a segunda mulher negra a ingressar no Campo de Provas Naval da Virgínia em Dahlgren, possuia a função de coletar dados dos satélites em órbita e depois inseri-los em computadores para análise de elevações de superfície. Foi indicada como diretora do projeto do satélite Seasat, o primeiro com a função de sensoriamento remoto dos oceanos por meio de radar. Em 1980 ela realizou seu maior trabalho: a programação que calculava o geoide da Terra com precisões suficientes para a existência do GPS. Além dos primeiros passos para a construção do GPS, ela também desenvolveu um guia para melhorar a precisão dos dados obtidos por satélites, que auxiliou os futuros cientistas em seus estudos. ",
      fonte: "https://www.hypeness.com.br/2021/03/11-mulheres-negras-que-brilharam-na-tecnologia-com-invencoes-transformadoras/"
    },

    bio04: {
      nome: "Dorothy Vaughan",
      imagem: "https://cdn.britannica.com/26/204326-050-5BE74425/Dorothy-Vaughan.jpg",
      descricao: 'Em 1929, Dorothy Vaughan era bacharel em ciências pela Universidade de Wilberforce (Ohio). Dorothy Vaughan foi a primeira supervisora negra da NASA, na área de computação. E mais do que isso: ela foi uma das pioneiras em computação na maior agência espacial do planeta e trabalhou juntamente com Mary Jackson como "computadora" no início de sua carreira. Seus esforços em FORTRAN fizeram a diferença nos cálculos das missões espaciais, sendo Dorothy Vaughan considerada uma das mentes mais brilhantes da NASA no seu tempo.',
      fonte: "https://www.eldorado.org.br/blog/quem-foi-dorothy-vaughan-a-primeira-supervisora-negra-na-historia-da-nasa/"
    },

    bio05: {
      nome: "Angela Benton",
      imagem: "https://mma.prnewswire.com/media/1223510/Streamlytics.jpg?w=600",
      descricao: "Angela Benton é um nome contemporâneo de peso, quando falamos em mulheres negras na indústria da tecnologia.  Ela fundou a NewME em 2011, que foi a primeira aceleradora voltada para minorias. Ao perceber a falta de conteúdos focados em negros estadunidenses interessados em tecnologia, Angela apostou em um espaço para compartilhar notícias da área, a Black Web media. E não parou mais. Hoje, é uma referência em diversidade na indústria de tecnologia e já ajudou inúmeras empresas do setor a conseguir financiamento e orientação no Vale do Silício.",
      fonte: "https://athenetec.com/black-history-month/"
    },

    bio06: {
      nome: "Katherine G. Johnson",
      imagem: "https://projetolua.ifce.edu.br/wp-content/uploads/2020/07/oga_katherine_johnson-300x300.jpg",
      descricao: "Aos 18 anos, Katherine se formou na faculdade. Assim como Dorothy e Mary Jackson, Katherine trabalhou como computadora na Nasa. Katherine queria conhecer todos os detalhes daquilo em que estava trabalhando. Com muita luta, Katherine conseguiu participar das reuniões. O cálculo de planos de voo envolvia equações de geometria complexas, e Katherine era extremamente boa nelas. Sua habilidade com matemática era incrível, e ela logo se tornou uma líder no cálculo de trajetórias, sendo uma parte essencial da equipe que calculou a rota para a primeira missão tripulada à Lua, em 1969 Mais tarde, ela trabalhou em muitos projetos importantes da Nasa, inclusive no programa dos ônibus espaciais e nos planos para a missão a Marte. O trabalho dela ajudou os astronautas a visitar as estrelas e voltar à Terra em segurança. Ela se aposentou em 1986, depois de 33 anos de trabalho.",
      fonte: "http://mtciencias.com.br/mulheres/katherine-johnson%E2%80%8B/"
    },

    bio06: {
      nome: "Shirley Ann Jackson",
      imagem: "https://wp.technologyreview.com/wp-content/uploads/2022/02/MA22_intro.jpeg?fit=752,979",
      descricao: "Nascida em 1946, nos Estados Unidos, ela é uma física e a 18ª presidente do Instituto Politécnico Rensselaer, uma importante instituição de Ensino Superior, referência em todo o mundo. Foi a primeira mulher afro-americana a conquistar um diploma de doutorado no Instituto de Tecnologia de Massachusetts (MIT), em 1973. O trabalho dela nos deu a oportunidade de usar recursos como chamada em espera e identificador de chamadas. Além disso, também o desenvolvimento de discagem em telefone analógico, aparelhos de fax portáteis e os cabos de fibra óptica que fazem suas chamadas telefônicas de qualidade a longa distância.",
      fonte: "https://www.ung.br/noticias/conheca-mulheres-negras-inspiradoras-na-tecnologia"
    },

    bio07: {
      nome: "Annie Easley",
      imagem: "https://www1.grc.nasa.gov/wp-content/uploads/GRC-1976-C-00926.jpg",
      descricao: 'Annie Jean Easley nasceu na cidade de Birmingham (estado do Alabama, Estados Unidos), em 23 de abril de 1933. Annie formou em enfermagem e até meados de 1955, nunca havia ouvido falar da NACA - que depois viria a se tornar NASA. Conseguiu um emprego como "computadora humana" e iniciou sua trajetória que duraria 34 anos O trabalho antes realizado por pessoas que eram computadores humanos começou a ser gradativamente substituído por máquinas. Para que pudesse continuar atuando em sua função, Annie estudou programação de computadores, contribuindo no desenvolvimento de um dos primeiros softwares de navegação espacial, este utilizado no Projeto Centauro [5]. Tal projeto possibilitou o lançamento de sondas e satélites ao espaço, obtendo sucesso inicialmente em 1963, ocorrido no contexto da corrida espacial EUA x Rússia, sendo até hoje considerada uma das pesquisas mais importantes da NASA já feitas.',
      fonte: "https://horizontes.sbc.org.br/index.php/2022/02/annie-easley-legado-de-ciencia-e-luta-da-terra-ao-espaco/"
    },

    bio08: {
      nome: "Marian R. Croak",
      imagem: "https://www.blackpast.org/wp-content/uploads/Marian-Croak-ATT.jpg",
      descricao: "Marian Rogers Croak se formou pela University of California and Princeton University, obteve seu Ph.D em análise qualitativa e psicologia social em 1982, atualmente é vice-presidente de engenharia do Google. Ela foi vice-presidente sênior de pesquisa e desenvolvimento da AT&T e detém mais de 200 patentes. Marian foi indicada para o Women in Technology International Hall of Fame em 2013. Em 2022, Croak foi incluída no National Inventors Hall of Fame por sua patente sobre a tecnologia VoIP (Voice over Internet Protocol). Dessa forma, ela se tornou uma das duas primeiras mulheres negras a receber essa honra, junto com Patricia Bath. A sua invenção permite que os usuários façam chamadas pela internet em vez de uma linha telefônica. Atualmente, o uso generalizado da tecnologia VoIP é vital para trabalhos e conferências remotos.",
      fonte: "https://www.blackpast.org/african-american-history/croak-marian-r-1955/"
    },

  };

  var content /*Armazenando o conteúdo da section*/ = document.getElementById("content");

  for /*Criando laço de repetição*/ (var bio in biografias) {

    content.innerHTML += /*Faz atribuições e valores dentro da variável bio*/

      /*Inserindo todas as classes do html*/'<div class="card">' +

      '<img src="' +

      biografias[bio /*A Variável bio faz com que o for percorra todas as informações de dentro da array */].imagem +

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

      '">Fonte</a>' + "</details></div>"
  }
}
carregaDicionario();

function carregaSobre() {
  var sobre = {
    container01: {
      id: "container1",
      titulo: "Sobre a desenvolvedora",
      descricao: 'O projeto nasceu a partir do meu projeto de conclusão do curso online EuProgrAmo de FrontEnd 2, inicialmente  se chamava “Dicionário de mulheres negras” e contava com alguns cards com informações a respeito de intelectuais negras de maneira geral. A partir disso, tive a ideia de focar em um dicionário de mulheres negras apenas na tecnologia, a ideia surgiu com base na minha própria experiência enquanto mulher negra na tecnologia, nunca me vi fazendo parte disso porque não via pessoas semelhantes e mim nesta área, o que contribuiu para que eu ingressasse mais tarde do que eu gostaria. Existe uma frase que é atribuída aos mais diversos autores que eu utilizei de inspiração para a construção do meu dicionário. <i>"É necessário conhecer o passado para compreender o presente e idealizar o futuro".</i> Conhecer a nossa ancestralidade é essencial para que seja possível nos projetarmos em futuro de sucesso!'
    },

    container02: {
      id: "container2",
      titulo: "Sobre o dicionário",
      descricao: 'O dicionário de mulheres negras nasceu de a partir do curso de Front End 2, da PROGRAMARIA, o dicionário proposto no curso era sobre mulheres negras das mais variadas áreas, mas eu busquei focar o meu dicionário apenas em mulheres negras que fizeram e ainda fazem história na tecnologia. Existe uma frase que é atribuída aos mais diversos autores que eu utilizei de inspiração para a construção do meu dicionário. <i>"É necessário conhecer o passado para compreender o presente e idealizar o futuro".</i> Conhecer a nossa ancestralidade é essencial para que seja possível nos projetarmos em um futuro de sucesso!'
    },

    container03: {
      id: "container3",
      titulo: "Sobre a desenvolvedora",
      descricao: 'Sou Jade Figueredo, sou estudante de análise e desenvolvimento de sistemas. No momento estou fazendo transição de carreira e sou uma estudante bastante dedicada. Meu propósito é conseguir encorajar outras mulheres negras a seguir carreira na tecnologia.'
    },
  };

  var about = document.getElementsByClassName("about")[0];
  about.innerHTML += "<h2>Sobre o dicionário</h2>"
  for (var info in sobre) {
    if (sobre[info].id === "container3")
      about.innerHTML += `<div id=${sobre[info].id}>` +
        "<span class='circle-image'><img src='imgs/jade-figueredo.JPEG' alt='Foto de Jade com blusa verde e fundo neutro'></span>" +
        "<h3>" + sobre[info].titulo + "</h3>" +
        "<p>" + sobre[info].descricao + "</p>" +
        "</div>"
    else
      about.innerHTML += `<div id=${sobre[info].id}>` +
        "<h3>" + sobre[info].titulo + "</h3>" +
        "<p>" + sobre[info].descricao + "</p>" +
        "</div>"
  }
}

carregaDicionario()
carregaSobre()
