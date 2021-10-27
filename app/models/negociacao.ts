export class Negociacao {
  constructor(
    private readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(
      this._data.getTime()
    ); /*Proteção contra manipulação da data (na lista) pelo método setDate*/
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    /* Static Métodos estáticos podem ser acessados diretamente pela classe sem precisarmos de uma instância (const) desta mesma classe*/
    const exp = /-/g;
    const data = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(data, quantidade, valor);
  }
}
