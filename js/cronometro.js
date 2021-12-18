class Cronometro {
    constructor (){
        this.segundos = 0
        this.minutos = 0
        this.isJogoAcabado=false
    }
    atualizaCronometro(){
        if(!this.isJogoAcabado){
            this.segundos++
            if (this.segundos>=60){
                this.minutos++
                this.segundos=0
            }
            if (this.minutos==60 && this.segundos==0){
                alert("TEMPO ESGOTADO")
            }
            const segundosString = this.segundos <=9 ?`0${this.segundos}` : `${this.segundos}`
            const minutosString = this.minutos <= 9 ?`0${this.minutos}` : `${this.minutos}`
            const cronometro = `${minutosString}:${segundosString}`
            document.getElementById('cronometro').textContent= cronometro
        }
    }
}