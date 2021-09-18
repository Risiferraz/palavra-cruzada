class Casa {
    
    palavra = null;
    
    constructor(linha, coluna){
        this.linha = linha;
        this.coluna = coluna;        
        this.valor = '';
        this.elemento = document.getElementById(this.linha + this.coluna)
        this.elemento.addEventListener('keyup', event => this.executaAcoesQuandoSoltaATecla(event))
        this.elemento.addEventListener('click', () => this.executaAcoesQuandoClicado())
        this.elemento.addEventListener('blur', () => this.executaAcoesQuandoSairDaCasa())//ao sair de um elemento

    }
    
    executaAcoesQuandoSoltaATecla(event){
        this.valor = this.elemento.value;
        console.log("o valor é",this.valor)
        if(this.isJogadorApagando(event)) {
            this.palavra.vaiParaCasaAnterior(this)
        }else{
            this.palavra.vaiParaProxima(this)
        }
    }
    isJogadorApagando(event) {
        const key = event.keyCode || event.charCode;
        const numeroDaTeclaBackspace = 8
        const numeroDaTeclaBackspaceOpcional = 46
        return key == numeroDaTeclaBackspace || key == numeroDaTeclaBackspaceOpcional 
    }
    executaAcoesQuandoClicado(){
        this.elemento.classList.add("casa-selecionada");
    }
    executaAcoesQuandoSairDaCasa(){
        this.elemento.classList.remove("casa-selecionada");
    }
    colocaFocoNoElemento(){
        this.elemento.focus()
        this.executaAcoesQuandoClicado()
    }
}