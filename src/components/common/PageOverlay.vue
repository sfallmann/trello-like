<template functional>
  <div class="page-overlay" @click="listeners.click && listeners.click($event)" >
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $z-page-overlay;
  background-color: black;
  opacity: .5;
}
</style>
