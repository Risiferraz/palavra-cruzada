class Score{
    constructor (){
        document.getElementById('envia-pontuacao').addEventListener('click',()=>this.pegaPontuacao())
    }
    pegaPontuacao(){
        const nome = document.getElementById ("nome-jogador").value
        const pontuacao = document.getElementById ("pontuacao-final").value
        const jogadorRank= {nome,pontuacao}
        window.localStorage.setItem('listaDeScore', JSON.stringify(jogadorRank))
       
    }


}