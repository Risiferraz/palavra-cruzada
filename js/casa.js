class Casa {
    
    palavra = null;
    
    constructor(linha, coluna){
        this.linha = linha;
        this.coluna = coluna;        
        this.valor = '';
        this.elemento = document.getElementById(this.linha + this.coluna)
        this.elemento.addEventListener('keyup', () => this.executaAcoesQuandoSoltaATecla())
        this.elemento.addEventListener('click', () => this.executaAcoesQuandoClicado())
        this.elemento.addEventListener('blur', () => this.executaAcoesQuandoSairDaCasa())

    }
    
    executaAcoesQuandoSoltaATecla(){
        this.valor = this.elemento.value; 
        this.palavra.vaiParaProxima(this)
    }

    executaAcoesQuandoClicado(){
        this.elemento.classList.add("casa-selecionada");
    }
    executaAcoesQuandoSairDaCasa(){
        this.elemento.classList.remove("casa-selecionada");
    }

}