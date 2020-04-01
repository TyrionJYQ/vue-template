<template>
  <div>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'welcome to vue-template'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.title
  color: red
</style>