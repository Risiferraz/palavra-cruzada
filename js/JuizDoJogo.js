class JuizDoJogo{
    constructor(cronometro, pontuacao){
        this.pontuacao=pontuacao
        this.cronometro=cronometro
    }
    pegaPontuacaoFinal(){
        if(this.cronometro.isMenorQuinze()){
            return this.pontuacao*=10
        }
        if(this.cronometro.isDeQuinzeAVinte()){
            return this.pontuacao*=5
        }
        if(this.cronometro.isDeVinteATrinta()){
            return this.pontuacao*=2
        }
        else {
            return this.pontuacao
        }
    }
}
