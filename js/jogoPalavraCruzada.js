class JogoPalavraCruzada {
    constructor(palavras) {
        this.orientacao = orientacao.HORIZONTAL;
        this.palavras = palavras;
        this.palavras.forEach(p => p.jogoPalavraCruzada = this)
        this.pontuacao=0
        this.atualizaPontuacaoNoJogo()
    }
    tiraOFocoDeTodasAsPalavras() {
        this.palavras.forEach(p => p.tiraFocoDaPalavra())
    }
    mudaOrientacaoPara(orientacao){
        this.orientacao = orientacao;
        // document.getElementById("orientacao").textContent= this.orientacao; -> para informar por escrito a orientação: vertical ou horizontal
    }
    atualizaPontuacaoNoJogo(){
        document.getElementById('pontuacao').textContent= this.pontuacao;
    }
    adicionaPontuacao(){
        this.pontuacao+=10
        this.atualizaPontuacaoNoJogo()
    }
}