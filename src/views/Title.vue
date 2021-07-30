<template>
    <div>
        <div class="card mb-3 m-auto" style="max-width: 940px;" v-if="info">
            <div class="row g-0">
                <div class="col-md-4">
                    <img
                            :src="info.Poster"
                            alt="..."
                            class="img-fluid"
                    />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{info.Title}}</h5>
                        <p class="card-text">
                            {{info.Plot}}
                        </p>
                        <p class="card-text">
                            <b>Страна:</b> {{info.Country}}
                        </p>
                        <p class="card-text">
                            <b>Релиз:</b> {{info.Released}}
                        </p>
                        <p class="card-text">
                            <b>Автор:</b> {{info.Writer}}
                        </p>
                        <p class="card-text">
                            <b>Годы выпуска:</b> {{info.Year}}
                        </p>
                        <p class="card-text">
                            <b>Рейтинг:</b> {{info.imdbRating}}
                        </p>
                        <p class="card-text">
                            <b>Актеры:</b> {{info.Actors}}
                        </p>
                    </div>
                </div>
            </div>
            <router-link to="/home" class="btn btn-primary">Подробная информация</router-link>
        </div>
    </div>
</template>

<script>
  import {getPosterData} from '../core/api';

  export default {
    name: "Title",
    data() {
      return {
        info: null
      }
    },
    created() {
      getPosterData().then(d => {
        this.info = d;
      })
    },
  }
</script>

<style scoped>

</style>
