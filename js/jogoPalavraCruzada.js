class JogoPalavraCruzada {
    constructor(palavras) {
        this.orientacao = orientacao.HORIZONTAL;
        this.palavras = palavras;
        this.palavras.forEach(p => p.jogoPalavraCruzada = this)
    }
    tiraOFocoDeTodasAsPalavras() {
        this.palavras.forEach(p => p.tiraFocoDaPalavra())
    }
    mudaOrientacaoPara(orientacao){
        this.orientacao = orientacao;
        console.log("h",this.orientacao)
        document.getElementById("orientacao").textContent= this.orientacao;
    }
}