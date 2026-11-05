function media(){
    let nome = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt('Insira a primeira nota de ${nome}?'))
    let nota2 = Number(window.prompt('Além da nota ${nota1},'))
    med =(nota1+nota2)/2

    let msg //criar uma variavel e deixar ela vazia
    if(med >=60){// se por acaso a media foi 6.o ou mais...
        msg = 'meus parabéns! aprovado!!'
    }else{
        msg = 'Esude um pouco mais !!! Reprovado'
    }

        let res = document.getElementById('situacao')
            res.innerHTML=`<p> Calculando a média final de <mark>${nome}<mark>.</p>`
            res.innerHTML +=`<p> As notas obtidas foram<mark>${nota1} e ${num2}<mark>.</p>`
            res.innerHTML +=`<p> A média final será <mark>${med}<mark>.</p>`
            res.innerHTML +=`<p> A mensagem que temos é: <strong stylr='color:blue'>${msg}<strong.</p>`
}