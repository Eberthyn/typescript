export class Negociacao {
  constructor(
    private readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date{
    const data = new Date(this._data.getTime()); /*Proteção contra manipulação da data (na lista) pelo método setDate*/
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
