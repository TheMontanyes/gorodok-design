import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/RouteComponents/MainPage/MainPage.vue'
import CatalogPage from '@/components/RouteComponents/CatalogPage/CatalogPage.vue'
import AboutPage from '@/components/RouteComponents/AboutPage/AboutPage.vue'
import ProjectsPage from '@/components/RouteComponents/ProjectsPage/ProjectsPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: MainPage
	},
	{
		path: '/about',
		name: 'about-page',
		component: AboutPage
	},
	{
		path: '/catalog',
		name: 'catalog-page',
		component: CatalogPage
	},
	{
		path: '/projects',
		name: 'projects-page',
		component: ProjectsPage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'g-link-active'
})

export default router
