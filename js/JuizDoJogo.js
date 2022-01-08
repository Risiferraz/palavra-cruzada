class JuizDoJogo{
    constructor(cronometro, pontuacao){
        this.pontuacao=pontuacao
        this.cronometro=cronometro
    }
    pegaPontuacaoFinal(){
        if(this.cronometro.isMenosTrintaMinutos()){
            return this.pontuacao*=10
        }
        else {
            return this.pontuacao
        }
    }
}
