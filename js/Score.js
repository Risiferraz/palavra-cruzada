class Score{
    constructor (){
        document.getElementById('envia-pontuacao').addEventListener('click',()=>this.enviaPontuacao())
    }
    enviaPontuacao(){
        const listaDePontuacao = this._pegaListaDePontuacao()
        const nome = document.getElementById ("nome-jogador").value
        const pontuacao = document.getElementById ("pontuacao-final").value
        const jogadorRank= {nome,pontuacao}
        listaDePontuacao.push(jogadorRank)
        window.localStorage.setItem('listaDeScore', JSON.stringify(listaDePontuacao))
    }
    _pegaListaDePontuacao(){
        const listaDeScoreJSON = window.localStorage.getItem('listaDeScore')
        if (!!listaDeScoreJSON){
           return JSON.parse(listaDeScoreJSON)
        }else{
            return[]
        }

    }
}