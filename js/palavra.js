class Palavra {
    constructor(casas, palavraCerta, pergunta, numeroBotao) {
        this.botao = document.getElementById(`botao-pergunta${numeroBotao}`);
        this.casas = casas;
        this.palavraCerta = palavraCerta;
        this.pergunta = pergunta;
        this.casas.forEach(c => c.palavra = this);
        this.botao.addEventListener('click', () => this.acoesQuandoClicarNoBotao())
    }

    isCorreta() {
        const palavraEscrita = this.casas.map(c => c.valor).join("");//map transforma a cas na letra que ela recebe
        return palavraEscrita.toUpperCase() == this.palavraCerta.toUpperCase();
    }
    realizeAcoesAoTerminarAPalavra() {
        if(this.isCorreta()){
            this.casas.forEach(c=>c.marcaPalavraCerta())
            
        } else{
            alert('a palavra está errada')
        }
    }
    mostraCasa() {
        this.casas.forEach(c => {
            console.log(c.elemento)
        })
    }
    temProximaCasa(indice){
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
        //console.log('indo para casa anterior', this.pegaIndiceDaCasaAnterior(casaAtual));
        const indice = this.pegaIndiceDaCasaAnterior(casaAtual)
        this.colocaFocoNaCasaComIndice(indice)
        // console.log('indo para casa anterior', this.casas.indexOf(casaAtual));indexOf = método
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
        document.getElementById('pergunta-da-vez').textContent = this.pergunta;
        this.casas.forEach(casa => casa.marcaPalavraSelecionada())
    }
    acoesQuandoClicarNoBotao() {
        this.colocaFocoNaCasaComIndice(0)
        this.identifiqueAPalavraSelecionada()
    }
}