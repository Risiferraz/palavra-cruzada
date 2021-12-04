class PalavraBuilder{
        orientacao;
        casas;
        palavraCerta;
        pergunta;
        numeroBotao;
        comAOrientacao(orientacao){
            this.orientacao = orientacao;
            return this
        }
        comAsCasas(casas){
            this.casas = casas;
            return this
        }
        comAPalavraCerta(palavraCerta){
            this.palavraCerta = palavraCerta;
            return this
        }
        comAPergunta(pergunta){
            this.pergunta = pergunta;
            return this
        }
        comONumeroBotao(numeroBotao){
            this.numeroBotao = numeroBotao;
            return this
        }
        constroe(){
            return new Palavra (this.casas, this.palavraCerta, this.pergunta, this.numeroBotao, this.orientacao)
        }
}