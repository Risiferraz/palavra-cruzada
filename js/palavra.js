class Palavra {
    jogoPalavraCruzada = null
    constructor(casas, palavraCerta, pergunta, numeroBotao, orientacao) {
        this.botao = document.getElementById(`botao-pergunta${numeroBotao}`);
        this.orientacao = orientacao;
        this.casas = casas;
        this.palavraCerta = palavraCerta;
        this.pergunta = pergunta;
        this.casas.forEach(c => c.palavra[this.orientacao] =this);
        this.botao.addEventListener('click', () => this.acoesQuandoClicarNoBotao())
    }
    isCorreta() {
        const palavraEscrita = this.casas.map(c => c.valor).join("");//map transforma a cas na letra que ela recebe
        return palavraEscrita.toUpperCase() == this.palavraCerta.toUpperCase();
    }
    realizeAcoesAoTerminarAPalavra() {
        if (this.isCorreta()) {
            this.realizaAcoesParaPalavraCorreta()
        } else {
            this.realizaAcoesParaPalavraErrada()
        }
    }
    realizaAcoesParaPalavraErrada(){
        this.casas.forEach(c => c.marcaPalavraErrada())
        setTimeout(() => {
            this.casas.forEach(c => c.resetaCasa())
            this.colocaFocoNaCasaComIndice(0)
        }, 1000)
        this.jogoPalavraCruzada.reduzPontuacao()
    }
    realizaAcoesParaPalavraCorreta(){
        this.casas.forEach(c => c.marcaPalavraCerta())
        this.jogoPalavraCruzada.realizaAcoesAoAcertarPalavra()  
    }
    mostraCasa() {
        // this.casas.forEach(c => {
        //     console.log(c.elemento)
        // }) - não precisa mais de uma função para mostrar se a plavara estava selecionando as casas certas
    }
    temProximaCasa(indice) {
        return !!this.casas[indice]
    }
    vaiParaProxima(casaAtual) {
        const indice = this.pegaIndiceDaProximaCasa(casaAtual)
        if (this.temProximaCasa(indice)) {
            this.colocaFocoNaCasaComIndice(indice)

        } else {
            this.realizeAcoesAoTerminarAPalavra()

        }
    }
    vaiParaCasaAnterior(casaAtual) {
        const indice = this.pegaIndiceDaCasaAnterior(casaAtual)
        this.colocaFocoNaCasaComIndice(indice)
    }
    pegaIndiceDaCasaAnterior(casaAtual) {
        return this.casas.indexOf(casaAtual) - 1;
    }
    pegaIndiceDaProximaCasa(casaAtual) {
        return this.casas.indexOf(casaAtual) + 1
    }
    colocaFocoNaCasaComIndice(indice) {
        this.casas[indice].colocaFocoNoElemento()
    }
    identifiqueAPalavraSelecionada() {
        this.jogoPalavraCruzada.tiraOFocoDeTodasAsPalavras()
        document.getElementById('pergunta-da-vez').textContent = this.pergunta;
        this.casas.forEach(casa => casa.marcaPalavraSelecionada())
        this.casas.forEach(casa => casa.orientacaoDaVez=this.orientacao)
    }
    acoesQuandoClicarNoBotao() {
        this.identifiqueAPalavraSelecionada()
        this.colocaFocoNaCasaComIndice(0)
        this.jogoPalavraCruzada.acoesQuandoSelecionaUmaPergunta(this.orientacao)
    }
    tiraFocoDaPalavra() {
        this.casas.forEach(c => c.tiraFocoDaCasa())
    }
}