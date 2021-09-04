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
        const key = event.keyCode || event.charCode;
        const jogadorEstaApagando = key == 8 || key == 46 
        if(jogadorEstaApagando){
        this.palavra.vaiParaCasaAnterior(this)
        }else{
            this.palavra.vaiParaProxima(this)
        }
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