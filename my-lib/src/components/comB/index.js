import comB from './index.vue'

comB.install = Vue => {
	Vue.component(comB.name, comB)
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(comB)
}

export default comB
