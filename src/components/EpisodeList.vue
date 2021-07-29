<template>
    <div class="series-wrapper">
        <ul class="series-list">
            <li v-for="episode in episodes"
                :key="episode.episode_id" class="point">
                <div class="card" style="width: 18rem;">
                    <div class="card-body" @click="selectEpisode(episode.season, episode.episode)">
                        <h5 class="card-title">{{episode.title}} ({{episode.episode}})</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Дата выхода: {{episode.air_date}}</h6>
                        <p class="card-text">
                            Персонажи: <span v-for="characters in episode.characters">
                            {{characters}},</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
name: "EpisodeList",
props: {
  episodes: {}
},
methods: {
  selectEpisode(season, episode) {
    this.$emit('selectEpisode', {season, episode});
  }
}
}
</script>

<style scoped>
.series-list {
    list-style-type: none;
    border-right: 3px solid #000;
    padding: 0;
    margin: 10px;
}
</style>
