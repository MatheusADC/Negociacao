// export torna a classe exportável
export class Negociacao {
    // # indica que o atributo é privado, isto é, somente a própria classe ou uma inferência pelo construtor que podem alterar esse atributo
    #data;
    #quantidade;
    #valor;

    // Recebendo os atributos via construtor
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    // Criando um getter para o atributo data. Há a necessidade, pois o atributo é privado e é necessário obter o seu valor.
    get data() {
        return this.#data;
    }

    // Criando um getter para o atributo quantidade
    get quantidade() {
        return this.#quantidade;
    }

    // Criando um getter para o atributo valor
    get valor() {
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}