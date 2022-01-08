class JogoPalavraCruzada {
    constructor(palavras, cronometro) {
        this.orientacao = orientacao.HORIZONTAL;
        this.cronometro = cronometro;
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
    reduzPontuacao(){
        this.pontuacao-=1
        this.atualizaPontuacaoNoJogo()
    }
    realizaAcoesAoAcertarPalavra(){
        this.adicionaPontuacao()
        this.verificaSeJogoFoiFinalizado()
    }
    verificaSeJogoFoiFinalizado(){
        if(this.palavras.find(p=>!p.isCorreta())==null){
            // alert('JOGO FINALIZADO');
            document.getElementById("vitoria").style.display= "block"
            this.cronometro.pararCronometro()
            this.pontuacao = new JuizDoJogo(this.cronometro, this.pontuacao).pegaPontuacaoFinal()
            this.atualizaPontuacaoNoJogo()
        }
    }
    acoesQuandoSelecionaUmaPergunta(orientacao){
        this.mudaOrientacaoPara(orientacao)
        this.cronometro.iniciaCronometro()
    }
}