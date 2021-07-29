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
            <a @click="clickHandler(character.char_id)" class="btn btn-primary">Button</a>
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
        console.log('======', id)
        this.$router.push(`detailedInfo?id=${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
