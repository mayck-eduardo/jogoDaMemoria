let carta = document.getElementsByClassName("carta");
document.addEventListener("DOMContentLoaded", function() {

    for (let i = 0; i < carta.length; i++) {
        carta[i].addEventListener("click", function() {
            carta[i].classList.toggle("virar");
            console.log("Clicou na carta " + (i + 1));
        });
    }
});
