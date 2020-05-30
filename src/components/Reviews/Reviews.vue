<template>
  <section class="reviews g-section">
		<h2 class="g-main-title">Отзывы</h2>
		<swiper class="swiper" :options="swiperOption">
      <swiper-slide :key="i" v-for="(n, i) in 5" >
				<card/>
			</swiper-slide>
			<div class="button-prev" slot="button-prev"></div>
			<div class="button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script src="./Reviews.js"></script>

<style lang="less" scoped>
	@import "../../assets/css/settings.less";
	@import './Reviews.less';
</style>
