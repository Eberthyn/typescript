export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(
    model: T
  ): string; /*método abstrato obriga a implementação do template na classe filha*/

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
