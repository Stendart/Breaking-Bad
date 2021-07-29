<template>
  <div class="home">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item link-primary point"  :class="{'active' : selectedSeason === idx}" v-for="(season, idx) in episodesBySeasons"
            :key="idx">
          <a  @click="selectSeason(idx)">Сезон {{idx + 1}}</a>
        </li>
      </ol>
    </nav>
    <div class="season-wrapper">
      <EpisodeList :episodes="episodesBySeasons[selectedSeason]" @selectEpisode="selectEpisode"></EpisodeList>
      <EpisodeDetailedInformation :characters-list="charactersInEpisode" :death="deathInEpisode"></EpisodeDetailedInformation>
    </div>

  </div>
</template>
<script>
  import {getAllEpisodes, getCharacterByName, getDeathByEpisode} from '../core/api'
import {splitEpisodesBySeasons} from '../core/utils'

import EpisodeList from '../components/EpisodeList';
import EpisodeDetailedInformation from '../components/EpisodeDetailedInformation';

export default {
  name: 'Home',
  data() {
    return {
      allEpisodes: null,
      selectedSeason: 0,
      charactersInEpisode: [],
      deathInEpisode: []
    }
  },
  methods: {
    selectSeason(seasonNum) {
      this.selectedSeason = seasonNum;
    },
    selectEpisode(episode) {
      const curentEpisode = this.episodesBySeasons[episode.season - 1][episode.episode - 1];

      this.checkCharactersInfo(curentEpisode.characters);
      this.getDeath(episode);
    },
    checkCharactersInfo(charactersName) {
      this.charactersInEpisode = [];
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters').then(()=> {
          this.getCharactersInfo(charactersName);
        })
      } else {
        this.getCharactersInfo(charactersName);
      }
    },
    getCharactersInfo(charactersName) {
      charactersName.forEach(cName => {
        const character = this.$store.getters.charactersByName(cName);

        if(character[0]) {
          this.charactersInEpisode.push(character[0]);
        }
      });
    },
    getDeath(episode) {
      if(!this.$store.getters.isExistDeath) {
        this.$store.dispatch('allDeath').then(()=> {
          this.getDeathByEpisode(episode);
        })
      } else {
        this.getDeathByEpisode(episode);
      }
    },
    getDeathByEpisode(episode) {
      this.deathInEpisode = [];
      const death = this.$store.getters.deathByEpisode(episode.season, episode.episode)
      this.deathInEpisode = death;
    }
  },
  created() {
    getAllEpisodes().then(episodes => {
      this.allEpisodes = episodes;
    })
  },
  computed: {
    episodesBySeasons() {
      return splitEpisodesBySeasons(this.allEpisodes)?? [];
    },
  },
components: {
  EpisodeList,
  EpisodeDetailedInformation
}
}
</script>
<style scoped>
  .season-wrapper {
    display: flex;
  }
</style>
