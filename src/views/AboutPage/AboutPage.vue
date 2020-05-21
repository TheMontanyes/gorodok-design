<template>
	<main class="g-container">
		<section class="g-section">
			<h2 class="g-main-title">Преимущества</h2>
			<div class="card-list">
				<card :key="i" v-for="(n, i) in 5" />
			</div>
    </section>
	</main>
</template>

<script>
export default {
	name: 'about-page'
}
</script>
