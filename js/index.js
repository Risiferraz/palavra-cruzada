const casas = [
    new Casa('1', 'A'),
    new Casa('1', 'B'),
    new Casa('1', 'C')
]

const palavra = new Palavra(casas, 'API');


console.log(palavra.isCorreta());

palavra.mostraCasa()

