<template>
  <page-overlay @click="handleClickOutside($event)">
    <container className="edit-card-modal">
      <template v-slot:header >
        <content-block className="header">
          <h2>title</h2>
          <close-button @click="$emit('closed')" size="20"/>
        </content-block>
      </template>
    </container>
  </page-overlay>
</template>
<script>

import { PageOverlay, Container, ContentBlock, CloseButton } from '@/components/common';

export default {
  name: 'EditCard',
  components: {
    PageOverlay,
    Container,
    ContentBlock,
    CloseButton,
  },
  methods: {
    handleClickOutside(event) {
      if (this.$el !== event.target) return;
      this.$emit('closed');
    },
  },
};
</script>
<style lang="scss">
@import '@/scss/variables.scss';
.edit-card-modal {
  @include centerHorizontally;
  top: 5rem;
  width: 77rem;
  height: 65rem;
  background-color: white;
  padding: 2rem;
  .header {
    justify-content: space-between;
    align-items: center;
  }
}
</style>
