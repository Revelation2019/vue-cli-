import comC from './index.vue'

comC.install = Vue => {
	Vue.component(comC.name, comC)
}

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(comC)
}

export default comC
