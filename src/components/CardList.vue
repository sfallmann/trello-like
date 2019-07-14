<template>
  <container className="card-list">
    <template v-slot:header>
      <content-block className="card-list-header">
        <!-- <div class="card-list-title">First List</div> -->
        <v-input v-model="title" />
        <div class="card-list-menu-wrapper" v-click-outside="closeMenu">
          <v-button className="card-list-menu-btn" @click="toggleMenu">
            <font-awesome-icon icon="ellipsis-h" transform="grow-6" />
          </v-button>
          <Menu
            v-show="isMenuOpen"
            class="card-list-menu"
            :groups="menuOptions.groups"
            :title="menuOptions.title"
            @selected="menuItemSelected"
            @closed="closeMenu"
          />
        </div>
      </content-block>
    </template>
    <template v-slot:content>
      <content-block className="card-list-content">
        <div class="item">
          Some words...
        </div>
      </content-block>
    </template>
    <template v-slot:footer>
      <div class="card-list-footer-wrapper" v-click-outside="closeCardForm">
        <content-block :className="footerClass">
          <add-card v-show="isCardFormVisible"  @cancel="closeCardForm" v-model="newCardText" @input="testtxt" />
          <div role="button" class="add-card-link" v-show="!isCardFormVisible" @click="showCardForm">
            <span class="add-card-link-plus">+</span>
            <span class="add-card-link-text">Add another card</span>
          </div>
        </content-block>
      </div>
    </template>
  </container>
</template>

<script>
import { Container, ContentBlock, VButton, Menu, VInput, VTextArea } from '@/components/common';
import AddCard from '@/components/AddCard.vue';
import { listActions } from '../constants';

export default {
  name: 'CardList',
  components: {
    Container,
    ContentBlock,
    Menu,
    VButton,
    VInput,
    VTextArea,
    AddCard,
  },
  data() {
    return {
      title: 'First',
      cards: [],
      isCardFormVisible: false,
      menuOptions: {
        title: 'List Actions',
        groups: [
          {
            list: [
              {
                text: 'Add Card...',
                value: listActions.ADD_CARD,
              },
            ],
          },
          {
            list: [
              {
                text: 'Move All Cards in This List...',
                value: listActions.MOVE_ALL_CARDS,
              },
            ],
          },
          {
            list: [
              {
                text: 'Archive This List...',
                value: listActions.ARCHIVE_LIST,
              },
            ],
          },
        ],
      },
      isMenuOpen: false,
      newCardText: '',
    };
  },
  computed: {
    footerClass() {
      const cls = 'card-list-footer';
      return this.isCardFormVisible ? cls : `${cls} no-form`;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    menuItemSelected(event) {
      console.log('hello')
      console.log(event);
    },
    showCardForm() {
      this.isCardFormVisible = true;      
    },
    closeCardForm() {
      this.isCardFormVisible = false;
    },
    testtxt() {
      console.log('new text', this.newCardText)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/scss/variables.scss';
.card-list {
  background-color: $blue-grey;
  width: 27rem;
  min-height: 7rem;

  .card-list-header {
    justify-content: space-between;
    position: relative;
    .card-list-title {
      padding-left: .8rem;
      font-size: $medium-font-size;
      font-weight: 600;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
    }
    .card-list-menu-btn {
      width: 3rem;
      height: 3rem;
      &:hover {
        background-color: darken($blue-grey, 5%);
      }
    }

    .card-list-menu {
      background-color: white;
      width: 25rem;
      left: 23rem;
      top: 3.5rem;
      font-size: $medium-font-size;
    }
  }
  .card-list-content {
    .item {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      padding-left: .5rem;
      font-size: $medium-font-size;
      background-color: white;
      box-shadow: none;
      border-bottom: 1px solid darken($blue-grey, 20%);
      border-radius: $border-radius;
    }
  }
  .card-list-footer {
    margin-top: 1rem;
    
    &.no-form {
      cursor: pointer;
      &:hover {
        background-color: lighten($blue-grey, 5%);
      }      
    }

    .add-card-link {
      font-size: $medium-font-size;
      &:hover {
        .add-card-link-text{
          text-decoration: underline;
        }        
      }
      .add-card-link-plus {
        color: darken($blue-grey, 40%);
        font-weight: 600;
        font-size: $large-font-size;
        margin-right: .5rem;
      }
      
      padding: 0 .5rem .5rem .5rem;
      width: 100%;
    }
  }
  
}
</style>
