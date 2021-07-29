<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item link-primary point"
                :class="{'active' : selectedSeason === idx}"
                v-for="(_, idx) in episodesBySeasons"
                :key="idx">
                <a  @click="clickHandler(idx)">Сезон {{idx + 1}}</a>
            </li>
        </ol>
    </nav>
</template>

<script>
  export default {
    name: "SeasonList",
    props: {
      episodesBySeasons: {},
      selectedSeason: {}
    },
    methods: {
      clickHandler(seasoneNum) {
        this.$emit('selectSeason', seasoneNum);
      }
    }
  }
</script>

<style scoped>

</style>
