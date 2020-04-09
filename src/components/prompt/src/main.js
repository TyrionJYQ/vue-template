import Vue from 'vue'
import PromptBox from './main.vue'
import {
	create,
	append
} from '../../../helper/dom.js'
let currentPrompt, instance
let pQueue = []
const PromptConstructor = Vue.extend(PromptBox)

const defaultCallback = action => {
	let {
		callback
	} = currentPrompt,
	i = currentPrompt;
	// callback(action)
	if (i && i.resolve) {
		if (action === 'confirm') {
			i.resolve()
		} else {
			i.reject()
		}
	}
}


const initInstance = () => {
	instance = new PromptConstructor({
		el: create('div')
	})
	instance.callback = defaultCallback;
}

const showPrompt = () => {

	if (!instance) {
		initInstance()
	}
	instance.action = ''
	currentPrompt = pQueue.shift()
  append(instance.$el)
}

const Prompt = () => new Promise((resolve, reject) => {

	pQueue.push({
		resolve,
		reject
	})
	showPrompt()

})

export default Prompt
