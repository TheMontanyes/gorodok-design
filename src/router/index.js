import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage/MainPage.vue'
import Catalog from '@/components/Catalog/Catalog.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		component: MainPage
	},
	{
		path: '/catalog',
		name: 'catalog',
		component: Catalog
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'g-link-active'
})

export default router
