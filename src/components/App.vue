<template>
  <div>
    <img :src="imgUrl" alt="">
    <h1 class="title">{{title}}</h1>
    <button @click="prompt">弹窗</button>
  </div>
</template>

<script>
import Prompt from './prompt/src/main.js'
  export default {
    name: 'App',
    data() {
      return {
        title: 'welcome to vue-template',
        imgUrl: require('./icon.png')
      }
    },
		methods: {
			prompt() {
				Prompt().then(() => console.log('confirm')).catch(err => console.log('取消'))
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