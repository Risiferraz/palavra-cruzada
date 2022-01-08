class Cronometro {
    constructor() {
        this.segundos = 0
        this.minutos = 0
        this.isCronometroAtivo = false
    }
    atualizaCronometro() {
        if (this.isCronometroAtivo) {
            this.segundos++
            if (this.segundos >= 60) {
                this.minutos++
                this.segundos = 0
            }
            if (this.minutos == 60 && this.segundos == 0) {
                alert("TEMPO ESGOTADO")
            }
            const segundosString = this.segundos <= 9 ? `0${this.segundos}` : `${this.segundos}`
            const minutosString = this.minutos <= 9 ? `0${this.minutos}` : `${this.minutos}`
            const cronometro = `${minutosString}:${segundosString}`
            document.getElementById('cronometro').textContent = cronometro
        }
    }
    pararCronometro() {
        this.isCronometroAtivo = false
    }
    iniciaCronometro() {
        this.isCronometroAtivo = true
    }
    isMenosVinte() {
        return this.segundos < 20
    }
    isDeVinteATrinta() {
        return this.segundos > 21 < 30
    }
    isDeTrintaAQuarenta() {
        return this.segundos > 31 < 40
    }
}