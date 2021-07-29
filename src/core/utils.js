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

