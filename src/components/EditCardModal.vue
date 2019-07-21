<template>
  <page-overlay @click="handleClickOutside">
    <container className="edit-card-modal"></container>
  </page-overlay>
</template>
<script>

import { PageOverlay, Container } from '@/components/common';

export default {
  name: 'EditCard',
  components: {
    PageOverlay,
    Container,
  },
  methods: {
    handleClickOutside() {
      this.$emit('closed');
    },
  },
};
</script>
<style lang="scss">
.edit-card-modal {
  width: 20rem;
  height: 20rem;
  background-color: white;
}
</style>
