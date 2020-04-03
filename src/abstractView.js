class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render(this.template);
    this.bind();

    return this._element;
  }

  render(template) {
    const wrapper = document.createElement(`div`);
    wrapper.innerHTML = template;

    return wrapper.children.length > 1 ? wrapper : wrapper.children[0];
  }
  bind() {
    // bind handles if required
  }
}

export default AbstractView;