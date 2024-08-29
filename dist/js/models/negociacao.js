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
}