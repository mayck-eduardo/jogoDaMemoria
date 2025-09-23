let segundos = 60 * 5; // Defina o tempo inicial do temporizador
let intervalo;
const MULTIPLICADOR = 3; // Valor para multiplicar os segundos restantes
iniciarTemporizador();




    function iniciarTemporizador() {
        intervalo = setInterval(() => {
            segundos--;
            // console.log(`Segundos restantes: ${segundos}`);
            // Atualizar a UI com o valor de segundos

            if (segundos <= 0) {
                pararTemporizador();

            }
        }, 1000);
    }

    function pararTemporizador() {
        clearInterval(intervalo);
    }

    function calcularPontuacao() {
        let pontos = segundos ^ MULTIPLICADOR; // Exemplo: multiplicar os segundos restantes por 10
        let nome = prompt("Para calcular pontos, digite seu nome:");
        let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
        jogadores.push({ nome: nome, pontos: pontos });
        localStorage.setItem("jogadores", JSON.stringify(jogadores));

        // Exibe os jogadores e suas pontuações
        document.getElementById("ranking").innerText = "";
        jogadores.forEach(jogador => {
            document.getElementById("ranking").innerText += `${jogador.pontos}pts - ${jogador.nome}\n`;
        });
        alert(`Parabéns ${nome}! Sua pontuação é: ${pontos} pontos.`);
    }

// Para iniciar o temporizador:
// iniciarTemporizador();
