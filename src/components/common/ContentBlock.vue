<template functional>
  <div class="content-block" :class="props.className">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.content-block {
  padding: .2rem;
  display: flex;
  border-radius: $border-radius;
}
</style>
