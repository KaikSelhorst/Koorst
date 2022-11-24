export class ToolTip {
  constructor(classe) {
    this.classe = classe;
  }
  onMouseLeave() {
    this.toolTip.remove();
    this.element.removeEventListener("mouseleave", this.onMouseLeave);
  }
  setPosition() {
    const { x, top, width } = this.element.getBoundingClientRect();
    this.toolTip.style.left = `${x + width + 20}px`;
    this.toolTip.style.top = `${top}px`;
  }
  criarToolTip() {
    const toolTipBox = document.createElement("div");
    toolTipBox.classList.add(this.classe);
    toolTipBox.innerHTML = this.element.getAttribute("aria-label");
    this.toolTip = toolTipBox;
    this.setPosition();
    return;
  }
  init(event) {
    this.setBind();
    this.element = event.currentTarget;
    this.criarToolTip();
    this.element.addEventListener("mouseleave", this.onMouseLeave);
    document.body.appendChild(this.toolTip);
  }
  setBind() {
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
}
