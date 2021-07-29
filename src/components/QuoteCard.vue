<template>
    <div>
        <h2>Цитаты:</h2>
        <ul>
            <li v-for="q in quotes" :key="q.quote_id">
                <p>Цитата: {{q.quote}} </p>
                <p>Автор: <b>{{q.author}}</b></p>
            </li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "QuoteCard",
    props: {
      quotes: {}
    }
  }
</script>

<style scoped>
p {
    margin: 0;
}
li {
    margin-top: 15px;
}
</style>
