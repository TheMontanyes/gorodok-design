<template>
  <section class="last-works g-section">
		<h2 class="g-main-title">Наши работы</h2>
		<div class="last-works__list">
			<div class="last-works__item" :key="i" v-for="(n, i) in 9">
				<img :src="require('@/assets/images/work-item.png')">
				<div class="last-works__view-work">
					<div class="last-works__view-work-content">
						<div class="g-slide-title">Крутой проект</div>
						<btn :text="'Посмотреть работу'" :className="['g-link', 'g-btn', 'g-btn-orange']"/>
					</div>
				</div>
			</div>
		</div>
		<btn :text="'Показать больше'" :btnImg="'svg/click.svg'" :className="['g-link', 'g-btn', 'g-btn-white', 'last-works__btn-more']"/>
  </section>
</template>

<script src="./LastWorks.js"></script>

<style lang="less">
	@import "../../assets/css/settings.less";
	@import './LastWorks.less';
</style>
