let segundos = 0
let minutos = 0
let horas = 0

setInterval(() => {
   atualizaCronometro() 
}, 1000);
function atualizaCronometro(){
    segundos++
    if (segundos>=60){
    minutos++
    segundos=0
    }
    if (minutos==60 && segundos==0){
        alert("TEMPO ESGOTADO")
    }
    const segundosString = segundos <=9 ?`0${segundos}` : `${segundos}`
    const minutosString = minutos <= 9 ?`0${minutos}` : `${minutos}`
    const cronometro = `${minutosString}:${segundosString}`
    document.getElementById('cronometro').textContent= cronometro
}