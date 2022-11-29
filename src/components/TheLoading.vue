<template>
  <div class="wrapper">
    <div class="box">
      <span class="retan"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoading",
};
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
}
.box {
  width: 40px;
  height: 40px;
  position: relative;
}

.retan {
  width: 12px;
  height: 12px;
  background: #1d1d1d;
  content: "";
  position: absolute;
  animation: slide 3s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(32px, 0, 0);
  }
  50% {
    transform: translate3d(32px, 32px, 0);
  }
  75% {
    transform: translate3d(0px, 32px, 0);
  }
}
</style>
