<template functional>
  <div class="form-textarea-wrapper">
    <textarea
      ref="vTextArea"
      :placeholder="props.placeholder"
      class="form-textarea"
      rows="6"
      :value="props.value"
      :name="props.name"
      :type="props.type || 'text'"
      :id="props.id"
      @input="listeners.input && listeners.input($event)"
    />
  </div>
</template>
<style lang="scss">
@import '@/scss/variables.scss';
.form-textarea-wrapper {
  .form-textarea {
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 6rem;
  }
}
</style>
