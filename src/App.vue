<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/Occupation">Occupation</router-link> |
      <router-link to="/">Title</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('allEpisodes');
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0d6efd;
}

.point {
  cursor: pointer;
}
</style>
