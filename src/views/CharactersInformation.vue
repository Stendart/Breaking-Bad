<template>
    <div>
        <div class="card" v-if="getCharecterInfo">
            <img
                    :src="getCharecterInfo.img"
                    class="card-img-top"
                    alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">{{getCharecterInfo.name}}</h5>
                <p class="card-text" >
                    Персонаж появлялся в {{getCharecterInfo.appearance}} сезонах
                </p>
                <template v-if="getDeathInfo">
                    <p class="card-text">
                        Персонаж связан с  {{getDeathInfo.responsible}} смертями
                    </p>
                    <p class="card-text">
                        Последние слова: "{{getDeathInfo.last_words}}"
                    </p>
                </template>

                <router-link class="btn btn-primary" to="/">Home</router-link>
            </div>
        </div>
        <TimeLine></TimeLine>
    </div>
</template>

<script>
import TimeLine from '../components/TimeLine';
  export default {
    name: "CharactersInformation",
    created() {
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters');
      }

      if(!this.$store.getters.isExistDeath) {
        this.$store.dispatch('allDeath');
      }
    },
    computed: {
      getCharecterInfo() {
        const id = this.$route.query.id;
        return this.$store.getters.charactersByID(id);
      },
      getDeathInfo() {
        const name = this.getCharecterInfo?.name;
        return this.$store.getters.deathByCharacterName(name);
      }
    },
    components: {
      TimeLine
    }
  }
</script>

<style scoped>
img {
    max-height: 50vh;
    object-fit: contain;
}
</style>
