<template>
  <div class="new-card-form">
    TEXT
    <v-text-area 
      placeholder="Enter a title for this card..."
      value="cardText"
      @input="$emit('input', value)"
    />
    <content-block>
      <v-button className="add-card-btn" @click="$emit('add')">
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
  props: {
    cardText: {
      type: String,
      default: ''
    }
  },
  name: 'AddCard',
  components: {
    VTextArea,
    ContentBlock,
    VButton,
  },
}
</script>
<style lang="scss">
@import '@/scss/variables.scss';
.new-card-form {
  margin-top: 1rem;
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

