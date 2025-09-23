let segundos = 60 * 5; // Defina o tempo inicial do temporizador
let intervalo;
const MULTIPLICADOR = 3; // Valor para multiplicar os segundos restantes
iniciarTemporizador();




    function iniciarTemporizador() {
        intervalo = setInterval(() => {
            segundos--;
            // console.log(`Segundos restantes: ${segundos}`);

            if (segundos <= 0) {
                pararTemporizador();
            }
        }, 1000);
    }

    function pararTemporizador() {
        clearInterval(intervalo);
    }

    function calcularPontuacao() {
        let pontos = segundos ^ MULTIPLICADOR;
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
        //parar todos os eventos de clique nas cartas
        for (let i = 0; i < carta.length; i++) {
            carta[i].style.pointerEvents = "none";
        }   
    }

// Para iniciar o temporizador:
// iniciarTemporizador();
