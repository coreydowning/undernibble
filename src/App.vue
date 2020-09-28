<template>
  <AddonList />
</template>

<script>
import AddonList from "./components/AddonList.vue"

export default {
  name: "UnderNibble",
  components: {
    AddonList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
