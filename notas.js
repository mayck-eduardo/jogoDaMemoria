//codigo explicado

document.addEventListener("DOMContentLoaded", function() {
    // Criando as 12 cartas como divs
    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div"); // Cria uma nova div
        div.className = "carta"; // Adiciona a classe 'carta'
        div.id = "carta" + i; // Define um id único para cada carta
        div.innerHTML = "carta" + i; // Define o texto interno da carta
        document.querySelector(".container-fluid").appendChild(div); // Adiciona a carta ao container
    }
    
    // Adiciona o evento de clique para cada carta
    for (let i = 0; i < carta.length; i++) {
        carta[i].addEventListener("click", function() {
            carta[i].classList.toggle("virar"); // Alterna a classe 'virar' na carta clicada
            console.log("Clicou na carta " + (i + 1)); // Exibe no console qual carta foi clicada
            carta[i].style.backgroundColor = "lightgray"; // Altera a cor de fundo da carta
            carta[i].style.backgroundImage = "url('imagens/" + (i + 1) + ".png')"; // Define a imagem de fundo da carta
            
            // Se duas cartas estiverem viradas, chama a função para resetar as cartas após 1 segundo
            if (document.querySelectorAll(".virar").length === 2) {
                setTimeout(function() {
                    resetCards();
                }, 1000);
            }
         
        });
    }

 
});

// Seleciona todas as cartas pela classe 'carta'
let carta = document.getElementsByClassName("carta");

// Função para resetar todas as cartas (remover classe 'virar', cor e imagem)
function resetCards() {
    for (let i = 0; i < carta.length; i++) {
        carta[i].classList.remove("virar"); // Remove a classe 'virar'
        carta[i].style.backgroundColor = "gray"; // Restaura a cor de fundo padrão
        carta[i].style.backgroundImage = ""; // Remove a imagem de fundo
    }
}
