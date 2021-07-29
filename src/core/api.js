const BASE_URL = 'https://www.breakingbadapi.com/api/';

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
