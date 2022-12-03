<template>
  <div class="TheToolTip" ref="tool" @mouseenter="mouseEnter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheToolTip",
  data() {
    return {
      element: null,
    };
  },
  methods: {
    mouseEnter() {
      const media = window.matchMedia("(max-width:976px)").matches;
      if (!media) {
        this.element = this.$refs.tool;
        this.criarToolTip();
        this.element.addEventListener("mouseleave", this.mouseLeave);
      }
    },
    mouseLeave() {
      this.toolTip.remove();
      this.element.removeEventListener("mouseleave", this.mouseLeave);
    },
    setPositionToolTip() {
      const { x, top, width } = this.element.getBoundingClientRect();
      this.toolTip.style.left = `${x + width + 20}px`;
      this.toolTip.style.top = `${top}px`;

      this.element.appendChild(this.toolTip);
    },
    criarToolTip() {
      const toolTipBox = document.createElement("div");
      toolTipBox.innerHTML = this.element.getAttribute("aria-label");
      this.toolTip = toolTipBox;
      this.setPositionToolTip();
      return;
    },
  },
};
</script>

<style>
.TheToolTip > div {
  background: var(--c13);
  color: var(--c1);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  min-width: 87px;
  z-index: 100;
  border-radius: 4px;
  font: 500 0.875rem/1rem "Rubik", sans-serif;
  animation: left 0.3s forwards;
}
.TheToolTip > div::before {
  content: "";

  display: flex;
  width: 20px;
  height: 20px;
  position: absolute;
  left: -12px;

  background: url("../assets/tool_tip_indicador.svg") no-repeat center;
}
</style>
