<template>
	<main class="g-container">
		<header-slider/>
		<last-works/>
		<advantages/>
		<callback/>
		<clients/>
		<reviews/>
	</main>
</template>

<script>
import Advantages from '@/components/Advantages/Advantages.vue'
import Reviews from '@/components/Reviews/Reviews.vue'

export default {
	name: 'main-page',
	components: {
		Advantages,
		Reviews
	}
}
</script>
