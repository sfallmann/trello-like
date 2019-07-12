<template functional>
  <div class="form-input-wrapper">
    <input
      :placeholder="placeholder"
      class="form-input"
      :value="props.value"
      :name="props.name"
      :type="props.type || 'text'"
      :id="props.id"
      @input="listeners.input && listeners.input($event.target.value)"
    />
  </div>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.form-input-wrapper {
  .form-input {
    background-color:transparent;
    padding-left: .8rem;
    font-size: $medium-font-size;
    font-weight: 600;
    height: 3rem;
    line-height: 3rem;   
    border: none;
    width: 22rem;
    cursor: pointer;

    &:focus {
      background-color: white;
      cursor: auto;
    }
  }
}
</style>
