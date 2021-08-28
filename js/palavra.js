class Palavra {
    constructor(casas, palavraCerta){
        this.casas = casas;
        this.palavraCerta = palavraCerta;
        this.elemento = document.getElementById("palavra")
        this.casas.forEach(c => c.palavra = this);
        
    }

    isCorreta(){
        const palavraEscrita = this.casas.map(c => c.valor).join("");
        return palavraEscrita == this.palavraCerta;
    }

    mostraCasa(){
        this.casas.forEach(c => {
            console.log(c.elemento)
        })
    }

    vaiParaProxima(casa){
        console.log('indo para proxima ', casa);
    }
}