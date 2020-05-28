<template>
  <section class="last-works g-section">
		<h2 class="g-main-title">Наши работы</h2>
		<div class="last-works__list">
			<div class="last-works__item" :key="i" v-for="(item, i) in works">
				<img :src="require('@/assets/images/' + item.image)" :title="item.title" :alt="item.title">
			</div>
		</div>
  </section>
</template>

<script src="./LastWorks.js"></script>

<style lang="less">
	@import "../../assets/css/settings.less";
	@import './LastWorks.less';
</style>
