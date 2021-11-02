const casasRisi = [
    new Casa('1', 'A'),
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

const pergunta1 = ' qual o meu nome'
const palavra1 = new Palavra(casasRisi, 'RISI', pergunta1,1);// entre parenteses = construtor da palavra - identificado pela palavr "new"
const palavra2 = new Palavra(casasDado, 'DADO', "quadradinho com números",2);
