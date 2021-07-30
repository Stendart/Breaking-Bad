<template>
  <div class="about">
    <ul>
      <li v-for="(character, occupation) in fillOccupation" :key="occupation">
        <b>{{occupation}}</b>
        <ul>
          <li v-for="ch in character" :key="ch.id">
            {{ch.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {fillOccupationList} from '../core/utils';

  export default {
    computed: {
      occupationList() {
        return this.$store.getters.occupation;
      },
      allCharacters() {
        return this.$store.getters.allCharacters;
      },
      fillOccupation() {
        return fillOccupationList(this.occupationList, this.allCharacters)
      }
    },
    created() {
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters');
      }
    },
  }
</script>
