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

export function generateOccupationList(characters) {
  
  return characters?.reduce((ac, c) => {
    ac.add(...c.occupation);
    return ac;
  }, new Set())
}

export function fillOccupationList(occupationList, characters) {
  const list = {};
  characters?.reduce((acc, ch) => {
    return ch.occupation.map(occupation => {
      if(occupationList?.has(occupation)) {
        list[occupation] ? list[occupation].push(ch) : list[occupation] = new Array(ch);
        return list
      }
    })
  }, {})
  return list
}
