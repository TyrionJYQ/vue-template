<template>
  <div>
    <img :src="imgUrl" alt="">
    <h1 class="title">{{title}}</h1>
    
  </div>
</template>

<script>
console.log( require('./icon.png'));
  export default {
    name: 'App',
    data() {
      return {
        title: 'welcome to vue-template',
        imgUrl: require('./icon.png')
      }
    }
  }
</script>

<style lang="stylus" scoped>
/*头部样式*/
.title
  color: red
  width:  calc(100% - 100px)
  display: grid

</style>