<template functional>
  <button class="btn"
    :class="props.className"
    @click="listeners.click && listeners.click($event)"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.btn {
  font-size: $medium-font-size;
  border-radius: $border-radius;
  text-align: center;
  position: relative;
}
</style>
