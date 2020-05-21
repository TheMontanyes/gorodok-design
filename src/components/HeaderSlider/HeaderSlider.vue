<template>
  <section class="header-slider">
		<swiper class="swiper" :options="swiperOption">
			<swiper-slide :key="i" v-for="(item, i) in slides">
				<h2 class="header-slider__title" data-swiper-parallax="-900">{{ item.title }}</h2>
				<div class="header-slider__description" data-swiper-parallax="-600">
					<p>{{ item.description }}</p>
					<div class="g-btn-group">
						<btn data-swiper-parallax="-600" :className="['g-link', 'g-btn', 'g-btn-orange']" :text="'Перейти к примерам'" />
						<btn data-swiper-parallax="-300" :className="['g-link', 'g-btn', 'g-btn-orange']" :text="'Перейти к заказу'" />
					</div>
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
