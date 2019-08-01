<template>
  <div class="form-input-wrapper">
    <input
      :placeholder="placeholder"
      class="form-input"
      :value="value"
      :name="name"
      @change="$emit('input', $event.target.value)"
      @keyup.enter="handleEnter"
      @blur="$emit('blur')"
      ref="input"
      :type="type || 'text'"
      :id="id"
    />
  </div>
</template>
<script>
export default {
  props: ['value', 'name', 'placeholder', 'type', 'id'],
  methods: {
    handleEnter() {
      const { input } = this.$refs;
      input.blur();
      this.$emit('enter');
    }
  }
}
</script>

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
