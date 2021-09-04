class Palavra {
    constructor(casas, palavraCerta){
        this.casas = casas;
        this.palavraCerta = palavraCerta;
        this.elemento = document.getElementById("palavra")
        this.casas.forEach(c => c.palavra = this);
        
    }

    isCorreta(){
        const palavraEscrita = this.casas.map(c => c.valor).join("");//map transforma a cas na letra que ela recebe
        return palavraEscrita == this.palavraCerta;
    }

    mostraCasa(){
        this.casas.forEach(c => {
            console.log(c.elemento)
        })
    }

    vaiParaProxima(casaAtual){
        console.log('indo para proxima', casaAtual);
    }
    
    vaiParaCasaAnterior(casaAtual){
       //console.log('indo para casa anterior', this.pegaIndiceDaCasaAnterior(casaAtual));
       const indice=this.pegaIndiceDaCasaAnterior(casaAtual)
       this.colocaFocoNaCasaComIndice(indice)
       // console.log('indo para casa anterior', this.casas.indexOf(casaAtual));indexOf = método
    }

    pegaIndiceDaCasaAnterior(casaAtual){
        return this.casas.indexOf(casaAtual) -1;
    }
    pegaIndiceDaProximaCasa(casaAtual){
        return this.casas.indexOf(casaAtual) +1
    }
    colocaFocoNaCasaComIndice(indice){
        this.casas[indice] .colocaFocoNoElemento()
    }
}