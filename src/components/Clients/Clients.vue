<template>
	<section class="clients g-section">
		<h2 class="g-main-title">Наши клиенты</h2>
		<swiper class="swiper clients-list" :options="swiperOption">
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/ohotno.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/auto.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/est-a-tet.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/pchelovod.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/prague.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/power-repair.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/est-a-tet.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/pchelovod.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/ohotno.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/auto.png')"
					alt
				/>
			</swiper-slide>
			<swiper-slide class="clients-item">
				<img
					class="clients-item__img"
					:src="require('@/assets/images/clients/est-a-tet.png')"
					alt
				/>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script src="./Clients.js"></script>

<style lang="less">
@import "../../assets/css/settings.less";
@import "./Clients.less";
</style>
