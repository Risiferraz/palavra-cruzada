class Score {
    constructor() {
        document.getElementById('envia-pontuacao').addEventListener('click', () => this.enviaPontuacao())
        document.getElementById('mostrar-tabela-pontuacao').addEventListener('click', () => this.mostraTabelaPontuacao())
    }
    enviaPontuacao() {
        const listaDePontuacao = this._pegaListaDePontuacao()
        const nome = document.getElementById("nome-jogador").value
        const pontuacao = document.getElementById("pontuacao-final").value
        const jogadorRank = { nome, pontuacao }
        listaDePontuacao.push(jogadorRank)
        window.localStorage.setItem('listaDeScore', JSON.stringify(listaDePontuacao))
    }
    _pegaListaDePontuacao() {
        const listaDeScoreJSON = window.localStorage.getItem('listaDeScore')
        if (!!listaDeScoreJSON) {
            return JSON.parse(listaDeScoreJSON)
        } else {
            return []
        }
    }
    mostraTabelaPontuacao() {
        const tabela = document.createElement('table')
        tabela.classList.add(`table`)
        tabela.classList.add(`table-bordered`)
        tabela.innerHTML = this._pegaCabecalhoDaTabela()
        tabela.innerHTML += this._pegaCorpoDaTabela()
        document.getElementById("tabela-de-pontuacao").appendChild(tabela)
    }
    _pegaCabecalhoDaTabela() {
        return `<tr>
        <th>Nome:</th>
        <th>Pontuação:</th>
        </tr>`
    }
    _pegaCorpoDaTabela() {
        let retorno = ``
        const listaDePontuacao = this._pegaListaDePontuacao()
        for (const jogador of listaDePontuacao) {
            retorno += this._pegaALinhaDoJogador(jogador)
        }
        return retorno
    }
    _pegaALinhaDoJogador(jogador) {
        return `<tr>
        <td>${jogador.nome}</td>
        <td>${jogador.pontuacao}</td>
        </tr>`
    }
}