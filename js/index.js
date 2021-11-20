//TODO FAZER O BUILDER DO JOGO PALAVRA CRUZADA
//TODO FAZER casas com mesma linha e coluna ser uma só
const orientacao =  { 
    VERTICAL : 'VERTICAL', 
    HORIZONTAL : 'HORIZONTAL', 
}
const casa1A = new Casa('1', 'A')

const casasRisi = [
    casa1A,
    new Casa('1', 'B'),
    new Casa('1', 'C'),
    new Casa('1', 'D'),
]
const casasDado = [
    new Casa('2', 'D'),
    new Casa('2', 'C'),
    new Casa('2', 'B'),
    new Casa('2', 'A'),
]
const casasRota = [
    new Casa('3', 'D'),
    new Casa('3', 'C'),
    new Casa('3', 'B'),
    new Casa('3', 'A'),
]
const casasBelo = [
    new Casa('4', 'A'),
    new Casa('4', 'B'),
    new Casa('4', 'C'),
    new Casa('4', 'D'),
]
const casasSeta = [
    casa1A,
    new Casa('2', 'A'),
    new Casa('3', 'A'),
    new Casa('4', 'A'),
]
const casasTiro = [
    new Casa('1', 'D'),
    new Casa('2', 'D'),
    new Casa('3', 'D'),
    new Casa('4', 'D'),
]

const pergunta1 = ' qual o meu nome'
const pergunta3 = ' caminho, direção'
const pergunta4 = ' bonito'
const pergunta5 = ' Pergunta 5'
const pergunta8 = ' Pergunta 8'
const listaDePalavras = [
    new Palavra(casasDado, 'DADO', "quadradinho com números",2,orientacao.HORIZONTAL),
    new Palavra(casasRisi, 'RISI', pergunta1,1,orientacao.HORIZONTAL),// entre parenteses = construtor da palavra - identificado pela palavr "new"
    new Palavra(casasRota, 'ROTA', pergunta3,3,orientacao.HORIZONTAL),// entre parenteses = construtor da palavra - identificado pela palavr "new"
    new Palavra(casasBelo, 'BELO', pergunta4,4,orientacao.HORIZONTAL),// entre parenteses = construtor da palavra - identificado pela palavr "new"
    new Palavra(casasSeta, 'SETA', pergunta5,5,orientacao.VERTICAL),// entre parenteses = construtor da palavra - identificado pela palavr "new"
    new Palavra(casasTiro, 'TIRO', pergunta8,8,orientacao.VERTICAL),// entre parenteses = construtor da palavra - identificado pela palavr "new"
]
new JogoPalavraCruzada(listaDePalavras)