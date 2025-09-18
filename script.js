let nome = prompt("Digite seu nome: ");

iniciarCronometro();



jogoAberto = true;

const matriz = [];
const contagem = {};

// Inicializa a contagem de repetições para cada número de 1 a 6
for (let i = 1; i <= 6; i++) {
    contagem[i] = 0; // criamos uma matriz para contar as repetições, ex: {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
}

//aqui sorteia os números para as cartas
for (let i = 1; i <= 12; i++) {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    } while (contagem[numeroAleatorio] >= 2); // Repete se o número já tem 2 repetições

    contagem[numeroAleatorio]++;
    matriz.push([numeroAleatorio]);
}



//espera a página carregar e usamos o DOM para manipular os elementos HTML
document.addEventListener("DOMContentLoaded", function () {
    //criando as 12 cartas com divs
    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div");
        div.className = "carta";
        div.id = "carta" + i;
        // div.innerHTML = "carta" + i;
        document.querySelector(".container-fluid").appendChild(div);
    }


    //armazena o caminho das 6 imagens
    const imagens = {
        1: "imagens/img1.png",
        2: "imagens/img2.png",
        3: "imagens/img3.png",
        4: "imagens/img4.png",
        5: "imagens/img5.png",
        6: "imagens/img6.png"
    };

    for (let i = 0; i < carta.length; i++) {
        carta[i].addEventListener("click", function () {
            //verificação para ver se o jogo está aberto
            if (!jogoAberto) {
                return;
            } else if (document.querySelectorAll(".encontrado").length === 12) {
                alert("Parabéns " + nome + "! Você encontrou todos os pares!");
                jogoAberto = false;
                pontuacao(intervalo);
                pararCronometro();
                return;
            }
            // impedir clicar em cartas já encontradas (se a carta já foi encontrada ou está virada ele não faz nada)
            if (carta[i].classList.contains("encontrado") || carta[i].classList.contains("virar")) {
                //adicionamos uma classe "encontrado" para as cartas que já foram encontradas, assim não podemos clicar nelas novamente
                return;
            }
            // permitir virar apenas duas cartas
            if (document.querySelectorAll(".virar").length < 2) {
                carta[i].classList.add("virar");
                console.log("Clicou na carta " + (i + 1));

                carta[i].style.backgroundColor = "lightgray";
                carta[i].style.backgroundImage = "url('" + imagens[matriz[i][0]] + "')";

            }
            //logica para verificar cartas iguais
            if (document.querySelectorAll(".virar").length === 2) {
                let cartasViradas = document.querySelectorAll(".virar");
                const idx1 = Array.from(carta).indexOf(cartasViradas[0]);
                const idx2 = Array.from(carta).indexOf(cartasViradas[1]);
                if (matriz[idx1][0] === matriz[idx2][0]) {
                    console.log("Encontrou um par!");
                    // marcar como encontrado, para não poder clicar novamente nem resetar
                    cartasViradas.forEach(c => {
                        c.classList.remove("virar");
                        c.classList.add("encontrado");
                    });
                } else {
                    console.log("Não é um par.");
                    setTimeout(function () {
                        resetCards();
                    }, 1000);
                }
            }

        });


    }


});


let carta = document.getElementsByClassName("carta");

//reset cards menos a carta virada
function resetCards() {
    const cartasViradas = document.querySelectorAll(".virar");
    if (cartasViradas.length === 2) {
        const idx1 = Array.from(carta).indexOf(cartasViradas[0]);
        const idx2 = Array.from(carta).indexOf(cartasViradas[1]);
        if (matriz[idx1][0] !== matriz[idx2][0]) {
            // Se não forem iguais, desvira
            cartasViradas.forEach(c => {
                c.classList.remove("virar");
                c.style.backgroundColor = "gray";
                c.style.backgroundImage = "";
            });
        }
    }
}

let segundos = 0;
let intervalo;

function iniciarCronometro() {
  intervalo = setInterval(() => {
    segundos++;
    console.log(`Segundos: ${segundos}`);
    // Actualizar a UI com o valor de segundos
  }, 1000); // Executa a cada 1000ms (1 segundo)
}

function pararCronometro() {
  clearInterval(intervalo);
}

// Para iniciar o cronómetro:
// iniciarCronometro();

// Para parar o cronómetro:
// pararCronometro();


function pontuacao(intervalo) {
    let pontos = 0;

    // Recupera jogadores antigos do localStorage ou inicializa como array vazio
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Adiciona novo jogador ao array
    jogadores.push({ nome: nome, pontos: pontos });
    console.log(jogadores);

    // Salva o array atualizado no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Exibe os jogadores e suas pontuações
    jogadores.forEach(jogador => {
        document.getElementById("ranking").innerText += `${jogador.pontos}pts - ${jogador.nome}\n`;
    });
}
