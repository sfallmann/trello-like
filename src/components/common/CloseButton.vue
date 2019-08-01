<template functional>
  <span 
    @click="listeners.click && listeners.click($event)" 
    class="close-button"
    :class="props.className"
  >
    <slot><font-awesome-icon icon="times" :transform="`grow-${props.size || 3}`" /></slot>
  </span>
</template>
<style lang="scss">
.close-button {
  cursor: pointer;
  color: black;
  &:hover {
    color: lighten(black, 25%);
  }
  &:active {
    color: lighten(black, 50%);
  }
}
</style>
