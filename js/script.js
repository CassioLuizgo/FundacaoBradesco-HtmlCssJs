'use strict';

// pega a referência do botão//
const switcher = document.querySelector('.btn');
/*const: Cria uma constante (uma variável cujo valor não pode ser reatribuído depois).
switcher: É o nome que você escolheu para identificar esse elemento no código.
document: Representa a página HTML inteira (o documento carregado no navegador).
querySelector(): É um método do JavaScript que pesquisa no documento usando os mesmos seletores do CSS.
'btn': O seletor que está sendo buscado. O ponto (.) indica que o JavaScript deve procurar por uma classe chamada btn.*/

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
/*switcher.addEventListener('click', ...):
addEventListener: Manda o navegador "ficar ouvindo" e esperando uma interação no elemento switcher.
'click': Define que a interação esperada é o clique do usuário.
function () { ... }: A função que será executada imediatamente toda vez que o botão for clicado.
document.body:
Seleciona diretamente a tag <body> da sua página HTML.
classList.toggle('dark-theme'):
classList: Acessa a lista de classes CSS aplicadas àquele elemento.
toggle('dark-theme'): Funciona como um interruptor para a classe dark-theme:
Se a tag <body> não tiver a classe, o toggle adiciona.
Se a tag <body> já tiver a classe, o toggle remove.*/