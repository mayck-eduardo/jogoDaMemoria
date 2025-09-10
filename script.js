document.addEventListener("DOMContentLoaded", function () {
    //criando as 12 cartas com divs
    for (let i = 1; i <= 12; i++) {
        let div = document.createElement("div");
        div.className = "carta";
        div.id = "carta" + i;
        div.innerHTML = "carta" + i;
        document.querySelector(".container-fluid").appendChild(div);
    }




    for (let i = 0; i < carta.length; i++) {
        carta[i].addEventListener("click", function () {
            // permitir virar apenas duas cartas
            if (document.querySelectorAll(".virar").length < 2) {
                carta[i].classList.toggle("virar");
                console.log("Clicou na carta " + (i + 1));
                carta[i].style.backgroundColor = "lightgray";
                carta[i].style.backgroundImage = "url('imagens/" + (i + 1) + ".png')";

            }
            //logica para verificar cartas iguais
            if (document.querySelectorAll(".virar").length === 2) {
                let cartasViradas = document.querySelectorAll(".virar");
                if (cartasViradas[0].id === cartasViradas[1].id) {
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
