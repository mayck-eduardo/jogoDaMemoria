jogoAberto = true;

const matriz = [];
const contagem = {};

// Inicializa a contagem de repetições para cada número de 1 a 6
for (let i = 1; i <= 6; i++) {
    contagem[i] = 0;
}

for (let i = 1; i <= 12; i++) {
    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    } while (contagem[numeroAleatorio] >= 2); // Repete se o número já tem 2 repetições

    contagem[numeroAleatorio]++;
    matriz.push([numeroAleatorio]);
}



document.addEventListener("DOMContentLoaded", function () {
    //criando as 12 cartas com divs
    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div");
        div.className = "carta";
        div.id = "carta" + i;
        div.innerHTML = "carta" + i;
        document.querySelector(".container-fluid").appendChild(div);
    }


    //array 6 imagens 12 cartas, ex. carta1 = img3 essa informção está em paresCartas agora vamos armazenar o caminho das 6 imagens
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
            // permitir virar apenas duas cartas
            if (document.querySelectorAll(".virar").length < 2) {
                carta[i].classList.toggle("virar");
                console.log("Clicou na carta " + (i + 1));

                carta[i].style.backgroundColor = "lightgray";
                carta[i].style.backgroundImage = "url('" + imagens[matriz[i][0]] + "')";

            }
            //logica para verificar cartas iguais
            if (document.querySelectorAll(".virar").length === 2) {
                let cartasViradas = document.querySelectorAll(".virar");
                if (cartasViradas[0].style.backgroundImage === cartasViradas[1].style.backgroundImage) {
                    console.log("Encontrou um par!");
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
    for (let i = 0; i < carta.length; i++) {
        carta[i].classList.remove("virar");
        carta[i].style.backgroundColor = "gray";
        carta[i].style.backgroundImage = "";
    }
}
