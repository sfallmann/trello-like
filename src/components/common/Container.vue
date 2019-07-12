<template functional>
  <section class="container" :class="props.className">
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot name="content"></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.container {
  padding: .5rem;
  display: flex;
  border-radius: $border-radius;
  flex-direction: column;
  > * {
    flex: 1;
  }
  box-shadow: $default-shadow;
}
</style>
