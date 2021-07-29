<template>
    <div>
        <h2 v-if="charactersList.length">Персонажи:</h2>
        <div class="card-wrap">
            <CharacterCard v-for="ch in charactersList"
                           :key="ch.id"
                           :character="ch"
            >
            </CharacterCard>
        </div>

        <h2 v-if="death.length">Смерти:</h2>
        <div v-for="d in death">{{d.death}} - {{d.cause}}</div>
    </div>
</template>

<script>
    import CharacterCard from './CharacterCard';

  export default {
    name: "SeriesDetailedInformation",
    props: {
      charactersList: Array,
      death: Array
    },
    components: {
      CharacterCard
    }
  }
</script>

<style scoped>
    img {
        width: 50%;
    }
    .card-wrap {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        align-content: flex-start;
        justify-content: space-between;

        flex-grow: 1;
    }

    .card-w {
        width: 300px;
    }
    .card-p {
        margin-bottom: 20px;
    }
</style>
