const casas = [
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

const palavra = new Palavra(casas, 'RISI');
const palavra2 = new Palavra(casasDado, 'DADO');


console.log(palavra.isCorreta());

palavra.mostraCasa()

