/* eslint-disable no-new */
import Vue from 'vue'
import 'reset-css'
import store from '@/store'
import router from '@/router'
import '@/assets/snowstorm'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// Подключение компонентов для регистрации
import App from '@/App.vue'
import Header from '@/components/Header/Header.vue'
import Card from '@/components/Card/Card.vue'
import Callback from '@/components/Callback/Callback.vue'
import Button from '@/components/Button/Button.vue'
import HeaderSlider from '@/components/HeaderSlider/HeaderSlider.vue'
import LastWorks from '@/components/LastWorks/LastWorks.vue'
import Clients from '@/components/Clients/Clients.vue'

Vue.config.productionTip = false

// Глобальная регистрация компонентов
Vue.component('card', Card) // Карточка (почему мы? / отзывы)
Vue.component('callback', Callback) // Плашка "Нужна консультация?"
Vue.component('btn', Button) // Универсальный компонент кнопки
Vue.component('header-slider', HeaderSlider) // Слайдер под шапкой на главной
Vue.component('last-works', LastWorks) // Слайдер под шапкой на главной
Vue.component('clients', Clients) // Слайдер под шапкой на главной
Vue.use(VueAwesomeSwiper) // Слайдер

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
