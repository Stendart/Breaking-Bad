const BASE_URL = 'https://www.breakingbadapi.com/api/';

const API_KEY = '88e836ce'
const OMDb_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${'tt0903747'}`;



export function getAllEpisodes() {
  const response = fetch(`${BASE_URL}episodes?series=Breaking+Bad`);
  return response.then(data => {
    return data.json()
  })
}

export function getAllDeath() {
  return fetch(`${BASE_URL}deaths`)
    .then(data => {
      return data.json()
  })
}

export function getAllCharacters() {
  return fetch(`${BASE_URL}characters`)
    .then(data => {
      return data.json()
    })
}

export function getAllQuotes() {
  return fetch(`${BASE_URL}quotes`)
    .then(data => {
      return data.json()
    })
}


export function getPosterData() {
  const response = fetch(OMDb_URL);
  return response.then(data => {
    return data.json()
  })
}
