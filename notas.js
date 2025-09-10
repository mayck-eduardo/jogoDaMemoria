// Variável global que indica se o jogo está aberto (ativa). Usada para controlar o estado do jogo.
jogoAberto = true;

// Cria uma matriz (array bidimensional) para armazenar os pares de cartas.
// Cada elemento da matriz será um array com o número da carta.
const matriz = [];

// Cria um objeto para contar quantas vezes cada número de 1 a 6 aparece.
// Isso garante que cada número apareça apenas duas vezes entre as 12 cartas.
const contagem = {};

// Inicializa a contagem de cada número de 1 a 6 com zero.
// Este laço prepara o objeto 'contagem' para registrar os números sorteados.
for (let i = 1; i <= 6; i++) {
    contagem[i] = 0; // Define o contador de cada número como zero.
}

// Gera 12 cartas, cada uma com um número aleatório de 1 a 6.
// O objetivo é garantir que cada número apareça exatamente duas vezes.
for (let i = 1; i <= 12; i++) {
    let numeroAleatorio; // Variável para armazenar o número sorteado.
    do {
        // Sorteia um número entre 1 e 6.
        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        // Math.random() gera um número entre 0 e 1.
        // Multiplicando por 6 e somando 1, obtemos um número entre 1 e 6.
    } while (contagem[numeroAleatorio] >= 2); // Repete o sorteio se o número já apareceu duas vezes.

    contagem[numeroAleatorio]++; // Incrementa o contador do número sorteado.
    matriz.push([numeroAleatorio]); // Adiciona o número à matriz como um array (representando uma carta).
}

// Aguarda o carregamento completo da página antes de executar o código.
// Isso garante que os elementos HTML estejam prontos para serem manipulados.
document.addEventListener("DOMContentLoaded", function () {
    // Cria 12 cartas (divs) e adiciona na tela.
    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div"); // Cria uma nova div para representar uma carta.
        div.className = "carta"; // Define a classe da div como "carta" para estilização.
        div.id = "carta" + i; // Define um id único para cada carta (ex: carta1, carta2...).
        div.innerHTML = "carta" + i; // Escreve o nome da carta dentro da div.
        document.querySelector(".container-fluid").appendChild(div); // Adiciona a carta na área principal do jogo.
    }

    // Define os caminhos das imagens para cada número de carta.
    // O objeto 'imagens' associa cada número a uma imagem específica.
    const imagens = {
        1: "imagens/img1.png",
        2: "imagens/img2.png",
        3: "imagens/img3.png",
        4: "imagens/img4.png",
        5: "imagens/img5.png",
        6: "imagens/img6.png"
    };

    // Adiciona o evento de clique para cada carta.
    // Quando o usuário clicar em uma carta, ela será "virada".
    for (let i = 0; i < carta.length; i++) {
        carta[i].addEventListener("click", function () {
            // Permite virar apenas duas cartas ao mesmo tempo.
            // Se menos de duas cartas estiverem viradas, permite virar mais uma.
            if (document.querySelectorAll(".virar").length < 2) {
                carta[i].classList.toggle("virar"); // Adiciona ou remove a classe "virar" para mostrar que a carta foi virada.
                console.log("Clicou na carta " + (i + 1)); // Exibe no console qual carta foi clicada.

                carta[i].style.backgroundColor = "lightgray"; // Muda a cor de fundo da carta virada.
                // Mostra a imagem correspondente ao número da carta.
                carta[i].style.backgroundImage = "url('" + imagens[matriz[i][0]] + "')";
            }
            // Verifica se duas cartas foram viradas.
            // Após 1 segundo, chama a função para "desvirar" as cartas.
            setTimeout(function () {
                resetCards();
            }, 1000);
        });
    }
});

// Seleciona todas as cartas criadas na tela.
// 'carta' é uma coleção de elementos HTML com a classe "carta".
let carta = document.getElementsByClassName("carta");

// Função que "desvira" todas as cartas, exceto a que acabou de ser virada.
// Remove a classe "virar", restaura a cor de fundo e remove a imagem.
function resetCards() {
    for (let i = 0; i < carta.length; i++) {
        carta[i].classList.remove("virar"); // Remove a classe 'virar' da carta.
        carta[i].style.backgroundColor = "gray"; // Restaura a cor de fundo padrão.
        carta[i].style.backgroundImage = ""; // Remove a imagem de fundo da carta.
    }
}