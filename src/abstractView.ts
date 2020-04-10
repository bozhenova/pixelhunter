export default abstract class AbstractView {
  private element: HTMLElement;

  abstract get template(): string;

  get element() {
    if (this.element) {
      return this.element;
    }
    this.element = this.render();
    this.bind(this.element);

    return this.element;
  }

  private render(): HTMLElement {
    const wrapper = document.createElement(`div`);
    wrapper.innerHTML = this.template;

    return wrapper.children.length > 1 ? wrapper : wrapper.children[0];
  }

  bind(element: HTMLElement): void {
    // bind handles if required
  }
}
