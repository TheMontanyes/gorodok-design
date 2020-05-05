<template>
	<main class="g-container">
		<carousel :data="data"></carousel>
		<advantages/>
		<callback/>
		<callback/>
	</main>
</template>

<script>
import Advantages from '@/components/Advantages/Advantages.vue'

export default {
	name: 'main-page',
	components: {
		Advantages
	},
	data () {
		return {
			data: [
				{
					content: this.content
				},
				{
					content: this.content
				}
			]
		}
	},

	methods: {
		content (createElement, data, vm) {
			return createElement('div', {
				class: 'example-slide'
			}, [`Slide ${vm.$parent.direction}`])
		}
	}
}
</script>
