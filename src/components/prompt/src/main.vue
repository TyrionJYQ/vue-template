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
	.tw-prompt-box__wrapper
		height: 200px 
		width: 200px 
		border: 1px solid #eee
		
</style>
