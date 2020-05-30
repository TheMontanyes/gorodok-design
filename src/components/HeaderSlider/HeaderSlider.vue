<template>
  <section class="header-slider">
		<swiper class="swiper" :options="swiperOption">
			<swiper-slide :key="i" v-for="(item, i) in slides">
				<div class="header-slider__content g-section" data-swiper-parallax="-1000">
					<h2 class="g-slide-title header-slider__title" data-swiper-parallax="-700">{{ item.title }}</h2>
					<p class="header-slider__description" data-swiper-parallax="-400">{{ item.description }}</p>
					<btn data-swiper-parallax="-100" :className="['g-link', 'g-btn', 'g-btn-orange', 'g-bold']" :text="'Перейти к примерам'" />
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
