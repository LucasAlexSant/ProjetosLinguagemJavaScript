function gerar(){
    var citacoes = {
        "- Professor Obama": '"Variavel é aquilo que vareia."',
        "- Jaison" :'"O diabo é ruim porque ele é velho"',
        "- Jailson Costas" :'"Vai ser só BA² na lombar do indeliquente"',
        "- Sensei do código" :'"Olha na bola do meu olho"',
    }

    var autores = Object.keys(citacoes);

    console.log(autores)

    var autor = autores[Math.floor(Math.random()* autores.length)];

    var citacao = citacoes[autor]; 
    document.getElementById("citacao").innerHTML= citacao;
    document.getElementById("autor").innerHTML= autor;

}