<template>
    <div class="card card-w card-p" >
        <img
                :src="character.img"
                class="card-img-top"
                alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">Имя: <b>{{character.name}}</b></h5>
            <p class="card-text">
                ДР: {{character.birthday}}
            </p>
            <p class="card-text">
                nickname: {{character.nickname}}
            </p>
            <a @click="clickHandler(character.char_id)" class="btn btn-primary">Подробнее</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CharacterCard",
    props: {
      character: Object
    },
    methods: {
      clickHandler(id) {
        this.$router.push(`detailedInfo?id=${id}`)
      }
    }
  }
</script>

<style scoped>
.card-w {
    width: 250px;
}
.card-p {
    margin-bottom: 20px;
}
</style>
