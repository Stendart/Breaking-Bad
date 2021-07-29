export function splitEpisodesBySeasons(allEpisodes) {
  if(!allEpisodes) {
    return;
  }
  const episodesBySeason = [];

  allEpisodes.reduce((acc, value) => {
    const seasonIndex = value.season - 1;
    if(!episodesBySeason[seasonIndex]) {
      episodesBySeason[seasonIndex] = [];
    }

    episodesBySeason[seasonIndex].push(value);
  }, [])
  return episodesBySeason;
}

function searchEpisodeByTitle(title, allEpisodes) {
  return allEpisodes.filter(episode => episode.title.includes(title));
}

function searchEpisodeByCharacterName(name, allEpisodes) {
  return allEpisodes.filter(episode => episode.characters.map(ch => ch.includes(name)));
}

function searchEpisodeByQuote(quote, allEpisodes) {
  return allEpisodes.filter(episode => episode.characters.map(ch => ch.includes(name)));
}
