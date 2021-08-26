//solicitando a div que iremos utilizar para colocar a frase
let divFrase = document.querySelector('.card-body');
//solicitando o botao que iremos fazer a função de clique
let button = document.querySelector('.btn');
//adicionamos o evento do botão que ao clicar chamara nossa função
button.addEventListener('click', fraseAleatoria);

//criamos a função que mostrará as frases aleatórias
function fraseAleatoria() {

    //criando numero randomico que servirá de index do nosso array de frases
    let i = Math.round(Math.random() * 5);
    //adiciona o texto da frase na div criada
    divFrase.textContent = frases[i];

};