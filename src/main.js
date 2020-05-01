/* eslint-disable no-new */
import Vue from 'vue'
import 'normalize.css'
import store from './store'
import router from './router'

// Подключение компонентов для регистрации
import App from './App.vue'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false

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
