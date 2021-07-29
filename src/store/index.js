import Vue from 'vue'
import Vuex from 'vuex'
import {getAllCharacters, getAllDeath} from '../core/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allDeath: null,
    allCharacters: null,
  },
  mutations: {
    setAllDeath(state, death) {
      state.allDeath = death;
    },
    setAllCharacters(state, characters) {
      state.allCharacters = characters;
    }
  },
  actions: {
    allDeath({commit}) {
      return new Promise((resolve, reject) => {
        const allDeath = getAllDeath();
        allDeath.then(death => {
          commit('setAllDeath', death);
          resolve();
        })
      })
    },
    allCharacters({commit}) {
      return new Promise((resolve, reject) => {
        const allCharacters = getAllCharacters();
        allCharacters.then(characters => {
          commit('setAllCharacters', characters)
          resolve();
        })
      })
    }
  },
  getters: {
    deathByEpisode: state => (season, episode) => {
      return state.allDeath?.filter(d => {
        return d.season === +season && d.episode === +episode;
      })
    },
    deathByCharacterName: state => name => {
      return state.allDeath?.filter(d =>  d.death === name)[0];
    },
    isExistDeath: state => {
      return !!state.allDeath;
    },

    charactersByName: state => name => {
      return state.allCharacters?.filter(ch => {
        return ch.name.toLowerCase().trim() === name.toLowerCase().trim() ||
          ch.nickname.toLowerCase().trim() === name.toLowerCase().trim()
      })
    },
    charactersByID: state => id => {
      return state.allCharacters?.filter(ch => ch.char_id === +id)[0];
    },
    isExistCharacters: state => {
      return !!state.allCharacters;
    },

  },
  modules: {
  }
})
