var listaJogada = document.querySelectorAll(".quadrado")
var jogadorSelecionado = "X";
var contGanhador = false;
for (let i = 0; i < listaJogada.length; i++) {
    let teclaApertada = listaJogada[i]
    teclaApertada.onclick = function () {
        mudarCor(teclaApertada)
        verificarMatriz(listaJogada);
    }
}

function mudarCor(teclaApertada) {
    $("#jogadorAtivo").text("")
    teclaApertada.classList.remove("quadradoStyle")
    teclaApertada.classList.add("jogada")
    if ($(teclaApertada).text() === "-") {
        $(teclaApertada).text(jogadorSelecionado)
        if (jogadorSelecionado === "X") {
            $("#jogadorAtivo").text(`${$("#jogadorAtivo").text()} ${jogadorSelecionado}`)
            jogadorSelecionado = "0"
        } else {
            $("#jogadorAtivo").text(`${$("#jogadorAtivo").text()} ${jogadorSelecionado}`)
            jogadorSelecionado = "X"
        }
    }
}

function verificarMatriz(listaJogada) {

    if (contGanhador == false) {
        if (listaJogada[0].textContent != "-" && listaJogada[0].textContent === listaJogada[1].textContent && listaJogada[1].textContent === listaJogada[2].textContent) {
            $("#jogadorAtivo").text(`O jogador ${listaJogada[1].textContent} ganhou`)
            listaJogada[0].classList.add("jogadorGanhou")
            listaJogada[1].classList.add("jogadorGanhou")
            listaJogada[2].classList.add("jogadorGanhou")
            contGanhador = true;
        }
        else if (listaJogada[3].textContent != "-" && listaJogada[3].textContent === listaJogada[4].textContent && listaJogada[4].textContent === listaJogada[5].textContent) {
            console.log(`O jogador ${listaJogada[4].textContent} ganhou`)
            listaJogada[3].classList.add("jogadorGanhou")
            listaJogada[4].classList.add("jogadorGanhou")
            listaJogada[5].classList.add("jogadorGanhou")
            contGanhador = true;
        }
        else if (listaJogada[6].textContent != "-" && listaJogada[6].textContent === listaJogada[7].textContent && listaJogada[7].textContent === listaJogada[8].textContent) {
            console.log(`O jogador ${listaJogada[4].textContent} ganhou`)
            listaJogada[6].classList.add("jogadorGanhou")
            listaJogada[7].classList.add("jogadorGanhou")
            listaJogada[8].classList.add("jogadorGanhou")
            contGanhador = true;
        }


        else if (listaJogada[0].textContent != "-" && listaJogada[0].textContent == listaJogada[3].textContent && listaJogada[3].textContent == listaJogada[6].textContent) {
            console.log(`O jogador ${listaJogada[1].textContent} ganhou`)
            listaJogada[0].classList.add("jogadorGanhou")
            listaJogada[3].classList.add("jogadorGanhou")
            listaJogada[6].classList.add("jogadorGanhou")
            contGanhador = true;
        }
        else if (listaJogada[1].textContent != "-" && listaJogada[1].textContent == listaJogada[4].textContent && listaJogada[4].textContent == listaJogada[7].textContent) {
            console.log(`O jogador ${listaJogada[4].textContent} ganhou`)
            listaJogada[1].classList.add("jogadorGanhou")
            listaJogada[4].classList.add("jogadorGanhou")
            listaJogada[7].classList.add("jogadorGanhou")
            contGanhador = true;
        }
        else if (listaJogada[2].textContent != "-" && listaJogada[2].textContent == listaJogada[5].textContent && listaJogada[5].textContent == listaJogada[8].textContent) {
            console.log(`O jogador ${listaJogada[5].textContent} ganhou`)
            listaJogada[2].classList.add("jogadorGanhou")
            listaJogada[5].classList.add("jogadorGanhou")
            listaJogada[8].classList.add("jogadorGanhou")
            contGanhador = true;
        }




        else if (listaJogada[0].textContent != "-" && listaJogada[0].textContent == listaJogada[4].textContent && listaJogada[4].textContent == listaJogada[8].textContent) {
            console.log(`O jogador ${listaJogada[4].textContent} ganhou`)
            listaJogada[0].classList.add("jogadorGanhou")
            listaJogada[4].classList.add("jogadorGanhou")
            listaJogada[8].classList.add("jogadorGanhou")
            contGanhador = true;
        }
        else if (listaJogada[2].textContent != "-" && listaJogada[2].textContent == listaJogada[4].textContent && listaJogada[4].textContent == listaJogada[6].textContent) {
            console.log(`O jogador ${listaJogada[6].textContent} ganhou`)
            listaJogada[2].classList.add("jogadorGanhou")
            listaJogada[4].classList.add("jogadorGanhou")
            listaJogada[6].classList.add("jogadorGanhou")
            contGanhador = true;
        }
    }






}