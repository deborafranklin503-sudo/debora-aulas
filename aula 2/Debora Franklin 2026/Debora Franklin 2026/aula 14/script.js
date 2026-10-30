
const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const botaoEscuro = document.querySelector('#botaoTema')
const areaResultado = document.querySelector('#painelResultado');
const elemento = document.querySelector('#el')
const corpo = document.querySelector('#corpo')

botaoDia.addEventListener('click', function() {
    let nomeUsuario = caixaTexto.value;
    areaResultado.innerHTML =`bom dia ${nomeUsuario}!`;
    corpo.style.backgroundColor = '#f3c35a';

    botaoDia.classList.add('botao-clicado');
    botaoNoite.classList.remove('botao-clicado')
});
botaoNoite.addEventListener('click',function() {
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `boa noite ${nomeUsuario}!`;
    corpo.style.backgroundColor = '#6092ff' ;  

    botaoNoite.classList.add('botao-clicado');
    botaoDia.classList.remove('botao-clicado');
    
});

    botaoEscuro.addEventListener ('click', function () {
        corpo.classList.toggle('modo-escuro');
 });


    






































