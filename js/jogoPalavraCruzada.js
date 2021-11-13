class JogoPalavraCruzada{
    constructor(palavras){
        this.palavras=palavras;
        this.palavras.forEach(p =>p.jogoPalavraCruzada=this)
    }
    tiraOFocoDeTodasAsPalavras(){
    this.palavras.forEach(p =>p.tiraFocoDaPalavra())
}
}