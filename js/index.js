const score = new Score()
const cronometro =new Cronometro()
    setInterval(() => {
    cronometro.atualizaCronometro()
    }, 1000);

//TODO FAZER O BUILDER DO JOGO PALAVRA CRUZADA
//TODO FAZER casas com mesma linha e coluna ser uma só
const orientacao = {
    VERTICAL: 'VERTICAL',
    HORIZONTAL: 'HORIZONTAL',
}
const casa1A = new Casa('1', 'A')
const casa2A = new Casa('2', 'A')
const casa3A = new Casa('3', 'A')
const casa4A = new Casa('4', 'A')

const casa1D = new Casa('1', 'D')
const casa2D = new Casa('2', 'D')
const casa3D = new Casa('3', 'D')
const casa4D = new Casa('4', 'D')

const casasRisi = [
    casa1A,
    new Casa('1', 'B'),
    new Casa('1', 'C'),
    casa1D,
]
const casasSino = [
    casa2D,
    new Casa('2', 'C'),
    new Casa('2', 'B'),
    casa2A,
]
const casasTais = [
    casa3A,
    new Casa('3', 'B'),
    new Casa('3', 'C'),
    casa3D,
]
const casasArno = [
    casa4A,
    new Casa('4', 'B'),
    new Casa('4', 'C'),
    casa4D,
]
const casasRota = [
    casa1A,
    casa2A,
    casa3A,
    casa4A,
]
const casasIsso = [
    casa1D,
    casa2D,
    casa3D,
    casa4D,
]

const pergunta1 = ' Pergunta 1'
const pergunta2 = ' Pergunta 2'
const pergunta3 = ' Pergunta 3'
const pergunta4 = ' Pergunta 4'
const pergunta5 = ' Pergunta 5'
const pergunta6 = ' Pergunta 6'
const listaDePalavras = [
    new PalavraBuilder()
        .comAsCasas(casasRisi)
        .comAPalavraCerta('RISI')
        .comAPergunta(pergunta1)
        .comONumeroBotao(1)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasSino)
        .comAPalavraCerta('SINO')
        .comAPergunta(pergunta2)
        .comONumeroBotao(2)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasTais)
        .comAPalavraCerta('TAIS')
        .comAPergunta(pergunta3)
        .comONumeroBotao(3)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasArno)
        .comAPalavraCerta('ARNO')
        .comAPergunta(pergunta4)
        .comONumeroBotao(4)
        .comAOrientacao(orientacao.HORIZONTAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasRota)
        .comAPalavraCerta('ROTA')
        .comAPergunta(pergunta5)
        .comONumeroBotao(5)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
    new PalavraBuilder()
        .comAsCasas(casasIsso)
        .comAPalavraCerta('ISSO')
        .comAPergunta(pergunta6)
        .comONumeroBotao(6)
        .comAOrientacao(orientacao.VERTICAL)
        .constroe(),
]
new JogoPalavraCruzada(listaDePalavras, cronometro, score)