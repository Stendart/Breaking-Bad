<template>
    <div class="input-group">
        <input type="search" class="form-control rounded"
               placeholder="Search" aria-label="Search" v-model="searchField"
               aria-describedby="search-addon" />
        <button type="button" @click="searchHandler" class="btn btn-outline-primary">search</button>
    </div>
</template>

<script>
  export default {
    name: "SearchField",
    data() {
      return {
        searchField: null
      }
    },
    methods: {
      searchHandler() {
        this.$emit('search', this.searchField);
        this.searchField = '';
      }
    }
  }
</script>

<style scoped>

</style>
