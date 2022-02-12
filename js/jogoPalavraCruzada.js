class JogoPalavraCruzada {
    palavraSelecionada=null
    constructor(palavras, cronometro, score) {
        this.score=score
        this.orientacao = orientacao.HORIZONTAL;
        this.cronometro = cronometro;
        this.palavras = palavras;
        this.palavras.forEach(p => p.jogoPalavraCruzada = this)
        this.pontuacao=0
        this.atualizaPontuacaoNoJogo()
        this.botaoRespondeTudo=document.getElementById('botao-responde-tudo')
        this.botaoRespondeTudo.addEventListener('click',()=>this.respondeTudo())
       document.getElementById('dica').addEventListener('click',()=>this.daDica())
        document.getElementById("jogo-finalizado").style.display= "none"
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
    isJogoFinalizado(){
        return this.palavras.find(p=>!p.isCorreta())==null
    }
    verificaSeJogoFoiFinalizado(){
        if(this.isJogoFinalizado()){
            // alert('JOGO FINALIZADO');
            document.getElementById("pontuacao-final").value=this.pontuacao
            document.getElementById("jogo-finalizado").style.display= "block"
            document.getElementById("vitoria").style.display= "block"
            document.getElementById("jogo-em-andamento").style.display= "none"
            this.cronometro.pararCronometro()
            this.pontuacao = new JuizDoJogo(this.cronometro, this.pontuacao).pegaPontuacaoFinal()
            this.atualizaPontuacaoNoJogo()
        }
    }
    acoesQuandoSelecionaUmaPergunta(orientacao){
        this.mudaOrientacaoPara(orientacao)
        this.cronometro.iniciaCronometro()
    }
    respondeTudo(){
        this.palavras.forEach(p => p.respondePalavra())
    }
    setaPerguntaSelecionada(pergunta){
        this.perguntaSelecionada=pergunta
    }
    daDica(){
        this.perguntaSelecionada.daDica()
    }
}