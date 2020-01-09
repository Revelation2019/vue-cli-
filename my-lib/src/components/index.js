import comA from './comA/index'
import comB from './comB/index'
import comC from './comB/index'

const components = [comA, comB, comC]

const install = Vue => {
	components.map(component => {
		Vue.component(component.name, component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	comA,
	comB,
	comC,
}
