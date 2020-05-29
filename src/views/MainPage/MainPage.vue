<template>
	<main class="g-container">
		<header-slider/>
		<last-works/>
		<advantages/>
		<callback/>
		<clients/>
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
