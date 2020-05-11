<template>
	<main class="g-container">
		<header-slider/>
		<advantages/>
		<callback/>
	</main>
</template>

<script>
import Advantages from '@/components/Advantages/Advantages.vue'

export default {
	name: 'main-page',
	components: {
		Advantages
	}
}
</script>
