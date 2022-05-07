# Desafio 2 - GitHub API

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

## Funcionalidades

O projeto conta com 3 páginas envolvendo a requisição à API do GitHub. Com o site você pode buscar por usuários do GitHub e visualizar seus dados, repositórios e repositórios marcados como "starred".

## Páginas

<li>Na primeira página o usuário informa o login que deseja pesquisar e com isso é exibido, o nome e avatar com o botão de busca para mais detalhes, nos levando à segunda página.</li>

<li>A segunda página trás as informações do usuário em um card lateral, enquanto ao lado são exibidos seus repositórios públicos. Ainda no card lateral de dados do usuário, há também um botão para acessar os repositórios "favoritos", acessando por meio dele a terceira página.</li>

<li>A terceira página conta com a exibição dos repositórios favoritos do usuário.</li>
<br /> 
Além dessas, existe também a página 404.

## Header e Footer

Todas as páginas contém o rodapé e cabeçalho. <br />

<li><b>O cabeçalho</b> contém algumas funcionalidades, como "botões" de navegação que mudam de acordo com a página em que está, e barra de pesquisa que está presente em todas as páginas exceto pela Home, que já contém uma. </li> <br />

<li><b>O rodapé</b> é simples, contém apenas uma breve explicação sobre o que o site faz, seguido da logo do GitHub, que ao ser clicada, leva para o site do GitHub.</li>

## Fluxo de execução do projeto

  A primeira página (Home), é a página inicial do site, nela o usuário pode utilizar a barra de pesquisa, informando um usuário para poder prosseguir para as demais páginas. Após informar um usuário válido, será exibido o avatar e nome do usuário informado com um botão para acessar mais detalhes, a partir dele o usuário é redirecionado para a segunda página. <br /> <br />
  Na segunda página, a de detalhes, são exibidas ao usuário informações sobre a conta pesquisada e seus repositórios. No canto esquerdo, há dados do usuários e, logo em seguida um botão para acessar os repositórios favoritos, a partir dele o usuário do site é redirecionado para a última página. <br />  <br />
  A última página é a dos repositórios favoritos, que são exibidos em "caixas" que podem ser clicadas para acessar a página do repositório específico no GitHub.

## Tecnologias utilizadas

No desenvolvimento do site foram utilizadas as seguintes tecnologias:
<li>React JS</li>
<li>CSS</li>
<li>Visual Studio Code</li>
<li>Material UI</li>

<br /> <br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
