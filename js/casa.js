class Casa {
    
    palavra = null;
    
    constructor(linha, coluna){
        this.linha = linha;
        this.coluna = coluna;        
        this.valor = '';
        this.elementoDoHTML = document.getElementById(this.linha + this.coluna)
        this.elementoDoHTML.value= this.valor
        this.elementoDoHTML.addEventListener('keyup', event => this.executaAcoesQuandoSoltaATecla(event))
        this.elementoDoHTML.addEventListener('click', () => this.executaAcoesQuandoClicado())
        this.elementoDoHTML.addEventListener('blur', () => this.executaAcoesQuandoSairDaCasa())//ao sair de um elemento

    }
    executaAcoesQuandoSoltaATecla(event){
        this.valor = this.elementoDoHTML.value;
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
        this.palavra.identifiqueAPalavraSelecionada();
        this.elementoDoHTML.classList.add("casa-selecionada");
        this.elementoDoHTML.classList.remove("palavra-selecionada");
    }
    executaAcoesQuandoSairDaCasa(){
        this.elementoDoHTML.classList.remove("casa-selecionada");
    }
    colocaFocoNoElemento(){
        this.elementoDoHTML.focus()
        this.executaAcoesQuandoClicado()
    }
    marcaPalavraSelecionada(){
        this.elementoDoHTML.classList.add("palavra-selecionada");
    }
    marcaPalavraCerta(){
        this.elementoDoHTML.classList.add("palavra-certa");
        this.elementoDoHTML.readOnly = true; 
    }
}