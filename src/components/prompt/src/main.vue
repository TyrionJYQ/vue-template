<template>
	<div class="tw-prompt-box__wrapper">
		<div class="tw-prompt-box">
			<div class="tw-prompt-box-header">
				{{title}}
			</div>
			<div class="tw-prompt-box__content">
				{{msg}}
			</div>
			<div class="tw-prompt-box__footer">
				<button @click="handleAction('confirm')">确定</button>
				<button @click="handleAction('cancel')">取消</button>
			</div>
		</div>

	</div>
</template>

<script>
  import '@stylus/var.styl'
	export default {
		data() {
			return {
				uid: 1,
				title: 'twist ui component prompt',
				msg: 'hello',
				callback: null,
				action: ''
			}
		},
		methods: {
			handleAction(action) {
				this.callback(action)
			}
		},

	}
</script>

<style scoped lang="stylus">
@import '~@stylus/var.styl'
.tw-prompt-box__wrapper
  display: inline-block
  width: 420px
  padding-bottom: 10px
  vertical-align: middle
  background-color: #fff
  border-radius: 4px
  border: 1px solid #ebeef5
  font-size: 18px
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
  text-align: left
  overflow: hidden
  backface-visibility: hidden
  {$--position-center}
  
		
</style>
