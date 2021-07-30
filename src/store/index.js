import Vue from 'vue'
import Vuex from 'vuex'
import {getAllCharacters, getAllDeath, getAllEpisodes, getAllQuotes} from '../core/api';
import {generateOccupationList} from '../core/utils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allEpisodes: null,
    allDeath: null,
    allCharacters: null,
    allQuotes: null
  },
  mutations: {
    setAllEpisodes(state, episodes) {
      state.allEpisodes = episodes;
    },
    setAllDeath(state, death) {
      state.allDeath = death;
    },
    setAllCharacters(state, characters) {
      state.allCharacters = characters;
    },
    setAllQuotes(state, quote) {
      state.allQuotes = quote;
    },
  },
  actions: {
    allEpisodes({commit}) {
      return new Promise((resolve, reject) => {
        const allEpisodes = getAllEpisodes();
        allEpisodes.then(episodes => {
          commit('setAllEpisodes', episodes);
          resolve();
        })
      })
    },
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
    },
    allQuotes({commit}) {
      return new Promise((resolve, reject) => {
        const allCharacters = getAllQuotes();
        allCharacters.then(quotes => {
          commit('setAllQuotes', quotes)
          resolve();
        })
      })
    }
  },
  getters: {
    allEpisodes: state => {
      return state.allEpisodes;
    },
    episodeByTitle: state => title => {
      return state.allEpisodes?.filter(episode => episode.title.toLowerCase().includes(title));
    },
    episodesByCharacterName: state => name => {
      return state.allEpisodes?.filter(e =>  !!e.characters.filter(ch => ch === name).length);
    },
    deathByEpisode: state => (season, episode) => {
      return state.allDeath?.filter(d => {
        return d.season === +season && d.episode === +episode;
      })
    },
    deathByCharacterName: state => name => {
      return state.allDeath?.filter(d =>  d.death === name)[0];
    },
    responsibleDeathByCharacterName: state => name => {
      return state.allDeath?.filter(d =>  d.responsible === name);
    },
    isExistDeath: state => {
      return !!state.allDeath;
    },

    allCharacters: state =>  {
      return state.allCharacters;
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

    quote: state => quotePart => {
      return state.allQuotes?.filter(q => q.quote.toLowerCase().includes(quotePart))
    },
    isExistQuote: state => {
      return !!state.allQuotes;
    },

    occupation: state => {
      return generateOccupationList(state.allCharacters)
    }

  },
  modules: {
  }
})
