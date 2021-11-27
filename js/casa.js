class Casa {
    palavra = {}
    orientacaoDaVez = null

    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
        this.elementoDoHTML = document.getElementById(this.linha + this.coluna)
        this.limpaCasa();
        this.elementoDoHTML.addEventListener('keyup', event => this.executaAcoesQuandoSoltaATecla(event))
        this.elementoDoHTML.addEventListener('click', () => this.executaAcoesQuandoClicado())
        this.elementoDoHTML.addEventListener('blur', () => this.executaAcoesQuandoSairDaCasa())//ao sair de um elemento

    }
    executaAcoesQuandoSoltaATecla(event) {
        this.valor = this.elementoDoHTML.value;
        console.log("o valor é", this.valor)
        if (this.isJogadorApagando(event)) {
            this.pegaPalavraCerta().vaiParaCasaAnterior(this)
        } else {
            this.pegaPalavraCerta().vaiParaProxima(this)
        }
    }
    isJogadorApagando(event) {
        const key = event.keyCode || event.charCode;
        const numeroDaTeclaBackspace = 8
        const numeroDaTeclaBackspaceOpcional = 46
        return key == numeroDaTeclaBackspace || key == numeroDaTeclaBackspaceOpcional
    }
    executaAcoesQuandoClicado() {
        this.pegaPalavraCerta().identifiqueAPalavraSelecionada();
        this.elementoDoHTML.classList.add("casa-selecionada");
        this.elementoDoHTML.classList.remove("palavra-selecionada");
    }
    executaAcoesQuandoSairDaCasa() {
        this.elementoDoHTML.classList.remove("casa-selecionada");
    }
    colocaFocoNoElemento() {
        if(this.isCasaCorreta()){
            this.pegaPalavraCerta().vaiParaProxima(this)
        }
        else{
            this.elementoDoHTML.focus()
            this.executaAcoesQuandoClicado()
        }
    }
    marcaPalavraSelecionada() {
        this.elementoDoHTML.classList.add("palavra-selecionada");
    }
    marcaPalavraCerta() {
        this.elementoDoHTML.classList.add("palavra-certa");
        this.elementoDoHTML.readOnly = true;
    }
    marcaPalavraErrada() {
        if (!this.isCasaCorreta()) {
            this.elementoDoHTML.classList.add("palavra-errada")
        }
    }
    isCasaCorreta() {
        return this.elementoDoHTML.readOnly;
    }
    resetaCasa() {
        if (!this.isCasaCorreta()) {
            this.elementoDoHTML.classList.remove("palavra-errada")
            this.limpaCasa()
        }
    }
    limpaCasa() {
        this.valor = '';
        this.elementoDoHTML.value = this.valor
    }
    tiraFocoDaCasa() {
        this.elementoDoHTML.classList.remove("palavra-selecionada");
        this.elementoDoHTML.classList.remove("casa-selecionada");
    }
    pegaPalavraCerta() {
        return this.palavra[this.orientacaoDaVez]
    }
}