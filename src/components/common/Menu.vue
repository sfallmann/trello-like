<template>
  <container className="menu">
    <template v-slot:header>
      <content-block className="menu-header">
        <span class="title">{{ title }}</span>
        <span v-if="canClose" class="close" @click="$emit('closed')">x</span>
        <hr/>
      </content-block>
    </template>
    <content-block
      className="menu-content"
    >
      <ul v-for="(group, index) in groups" :key="index">
        <li
          v-for="(item) in group.list" :key="item.value"
          @click="$emit('selected', item.value)"
        >
          <span>{{ item.text }}</span>
        </li>
        <div  v-show="index !== numOfGroups - 1"><hr/></div>
      </ul>
    </content-block>
  </container>
</template>
<script>
import { Container, ContentBlock } from '@/components/common';

export default {
  name: 'Menu',
  props: {
    groups: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
    canClose: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    Container,
    ContentBlock,
  },
  methods: {
    itemClicked(item) {
      this.$emit('selected', item);
    },
  },
  computed: {
    numOfGroups() {
      return this.groups ? this.groups.length : 0;
    },
  },
};
</script>
<style lang="scss">
@import '@/scss/variables.scss';
.menu {
  padding: 0;
  min-width: 10rem;
  position: absolute;
  left: 0;
  right: 0;
  z-index: $z-dropdown;

  .menu-header {
    padding: .5rem;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    .close {
      cursor: pointer;
      position: absolute;
      top: .5rem;
      right: 1rem;
      font-size: $large-font-size;
    }
    .title {
      text-align: center;
    }
    hr {
      width: 100%;
    }
  }

  .menu-content {
    flex-direction: column;
    padding: 0;
    ul {
      padding: 0;
      margin: 0;
      li {
        cursor: pointer;
        padding: .5rem;
        &:hover {
          background-color: lighten($blue-grey, 5%);
        }

        list-style: none;
      }
      div {
        padding: .25rem .5rem .25rem .5rem;
      }
    }

  }
}

</style>
