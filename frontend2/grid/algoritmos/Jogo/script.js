var jogador = "x";

function jogar(celula){
    //comparar se a celula está vazia para assim escrever
    if(celula.innerHTML == ""){
        //escreva no HTML a letra 
        celula.innerHTML = jogador;

        //alterna variavel jogador para proxima jogada
        if(jogador == "x"){
            jogador = "o"
            celula.style.backgroundColor = "red"
        }else{
            jogador = "x"
            celula.style.backgroundColor = "yellow"
        }
    }
}
function reiniciar(){
    window.location.reload()
}