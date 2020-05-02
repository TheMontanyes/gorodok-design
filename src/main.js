/* eslint-disable no-new */
import Vue from 'vue'
import 'reset-css'
import store from './store'
import router from './router'

// Подключение компонентов для регистрации
import App from './App.vue'
import Header from './components/Header/Header.vue'
import Card from './components/Card/Card.vue'
import Advantages from './components/Advantages/Advantages.vue'

Vue.config.productionTip = false

// Глобальная регистрация компонентов
Vue.component('card', Card) // Карточка (почему мы? / отзывы)
Vue.component('advantages', Advantages) // Блок (Почему мы?)

// APP ROOT
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#gorodok-app')

// HEADER
new Vue({
	router,
	store,
	render: h => h(Header)
}).$mount('#g-header')

function genVueInstance (elementsClass) {
	const elems = document.querySelectorAll(elementsClass)
	elems.forEach(elem => {
		new Vue({
			el: elem,
			router,
			store
		})
	})
	console.log('root-elems', elems)
}

genVueInstance('.js-vue-root-instance')
