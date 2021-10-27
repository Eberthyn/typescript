export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLLIElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM, verifique!`);
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(
    model: T
  ): string; /*método abstrato obriga a implementação do template na classe filha*/

  update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(
        /<script>[\s\S]*?<\/script>/,
        ""
      ); /*Proteção para o navegador não ler scripts adicionados no template*/
    }
    this.elemento.innerHTML = template;
  }
}
