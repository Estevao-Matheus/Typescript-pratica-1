export class MensagemVIew {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
