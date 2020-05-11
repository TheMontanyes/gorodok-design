<template>
  <section class="header-slider g-section">
		<swiper class="swiper" :options="swiperOption">
			<div data-swiper-parallax="-23%"></div>
			<swiper-slide :key="i" v-for="(item, i) in slides">
				<div class="header-slider__title" data-swiper-parallax="-600">{{ item.title }}</div>
				<div class="header-slider__description" data-swiper-parallax="-300">
					<p>{{ item.description}}</p>
				</div>
				<img class="header-slider__image" :src="require('@/assets/images/' + item.image)" alt="">
			</swiper-slide>
			<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
			<div class="button-prev" slot="button-prev"></div>
			<div class="button-next" slot="button-next"></div>
		</swiper>
  </section>
</template>

<script src="./HeaderSlider.js"></script>

<style lang="less">
	@import "../../assets/css/settings.less";
	@import './HeaderSlider.less';
</style>
