export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); /*Proteção contra manipulação da data (na lista) pelo método setDate*/
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
