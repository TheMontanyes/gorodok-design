/* eslint-disable no-new */
import Vue from 'vue'
import 'reset-css'
import store from '@/store'
import router from '@/router'
import VueCarousel from '@chenfengyuan/vue-carousel'
import '@/assets/snowstorm'

// Подключение компонентов для регистрации
import App from '@/App.vue'
import Header from '@/components/Header/Header.vue'
import Card from '@/components/Card/Card.vue'
import Callback from '@/components/Callback/Callback.vue'
import Button from '@/components/Button/Button.vue'

Vue.config.productionTip = false

// Глобальная регистрация компонентов
Vue.component('card', Card) // Карточка (почему мы? / отзывы)
Vue.component('callback', Callback) // Плашка Нужна консультация?
Vue.component('btn', Button) // Кнопка
Vue.component('carousel', VueCarousel) // VueCarousel

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
