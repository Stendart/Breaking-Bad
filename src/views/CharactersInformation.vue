<template>
    <div>
        <div class="card " v-if="getCharacterInfo">
            <img
                    :src="getCharacterInfo.img"
                    class="card-img-top"
                    alt="..."
            />
            <div class="card-body m-auto">
                <h5 class="card-title">{{getCharacterInfo.name}}</h5>
                <p class="card-text" >
                    Персонаж появлялся в {{getCharacterInfo.appearance}} сезонах
                </p>
                <template v-if="getResponsibleDeathByCharacterName.length">
                    <div class="card-text">Персонаж связан с смертями:
                        <ul>
                            <li v-for="d in getResponsibleDeathByCharacterName" :key="d.id">
                                {{d.death}}
                            </li>
                        </ul>
                    </div>
                    <p class="card-text" v-if="getDeathInfo.last_words">
                        Последние слова: "{{getDeathInfo.last_words}}"
                    </p>
                </template>
                <template v-else><p>Персонаж не связан не с одной смертью.</p></template>
                <router-link class="btn btn-primary" to="/home">Домой</router-link>
            </div>
        </div>
        <TimeLine :life-events="lifeEvents"></TimeLine>
    </div>
</template>

<script>
import TimeLine from '../components/TimeLine';
  export default {
    name: "CharactersInformation",
    data() {
      return {
        characterName: null
      }
    },
    created() {
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters');
      }

      if(!this.$store.getters.isExistDeath) {
        this.$store.dispatch('allDeath');
      }

      const name = this.getCharacterInfo?.name;
      this.characterName = name;
    },
    computed: {
      getCharacterInfo() {
        const id = this.$route.query.id;
        console.log('CharacterInfo', this.$store.getters.charactersByID(id));
        return this.$store.getters.charactersByID(id);
      },
      getDeathInfo() {
        console.log('DeathInfo', this.$store.getters.deathByCharacterName(this.characterName));
        return this.$store.getters.deathByCharacterName(this.characterName) || [];
      },
      getResponsibleDeathByCharacterName() {
        const name = this.getCharacterInfo?.name;
        return this.$store.getters.responsibleDeathByCharacterName(name);
      },
      getEpisodeListWithCharacterName() {
        return this.$store.getters.episodesByCharacterName(this.characterName);
      },
      lifeEvents() {
        return {
          birthday: {
            event: 'Рождение',
            date: this.getCharacterInfo?.birthday,
          },
          episodes: this.getEpisodeListWithCharacterName,
          death: this.getResponsibleDeathByCharacterName,
          status: this.getCharacterInfo?.status
        }
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
