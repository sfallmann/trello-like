<template>
  <div class="new-card-form">
    <v-text-area
      placeholder="Enter a title for this card..."
      :value="value"
    />
    <content-block>
      <v-button className="add-card-btn" @click="handleAddCard">
        Add Card
      </v-button>
      <v-button className="cancel-add-btn" @click="$emit('cancel')">
        X
      </v-button>
    </content-block>
  </div>
</template>
<script>
import VTextArea from '@/components/common/VTextArea.vue';
import ContentBlock from '@/components/common/ContentBlock.vue';
import VButton from '@/components/common/VButton.vue';

export default {
  name: 'AddCard',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.$refs.vTextArea.addEventListener('keypress', this.handleEnterKey);
    this.$refs.vTextArea.focus();
    this.$once('hook:beforeDestroy', () => {
      this.$refs.vTextArea.removeEventListener('keypress', this.handleEnterKey);
    });
  },
  components: {
    VTextArea,
    ContentBlock,
    VButton,
  },
  methods: {
    handleAddCard() {
      if (this.value === '') {
        this.$refs.vTextArea.focus();
        return;
      }
      this.$emit('add');
    },
    handleEnterKey(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (this.value) {
          this.handleAddCard();
        }
      } else {
        this.$emit('input', event.target.value);
      }
    },

  },
};
</script>
<style lang="scss">
@import '@/scss/variables.scss';
.new-card-form {
   width: 100%;
  .add-card-btn {
    background-color: $green;
    color: white;
    height: 3.5rem;
    width: 8rem;
    margin-right: 2rem;
  }
  .cancel-add-btn {
    font-size: $xlarge-font-size;
  }
}
</style>
