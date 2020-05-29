<template>
	<section class="advantages g-section">
		<h2 class="g-main-title">Почему мы?</h2>
		<ul class="advantages-list">
			<li class="advantages-item">
				<img
					class="advantages-item__img"
					:src="require('@/assets/images/svg/opitraboty.svg')"
					alt
				/>
				<p class="advantages-item__description">Хороший<br><span class="g-color-orange">опыт работы</span></p>
			</li>
			<li class="advantages-item">
				<img
					class="advantages-item__img"
					:src="require('@/assets/images/svg/individualnost.svg')"
					alt
				/>
				<p class="advantages-item__description"><span class="g-color-orange">Индивидуальный<br></span>подход к каждому клиенту</p>
			</li>
			<li class="advantages-item">
				<img
					class="advantages-item__img"
					:src="require('@/assets/images/svg/sroki.svg')"
					alt
				/>
				<p class="advantages-item__description"><span class="g-color-orange">Соблюдение<br></span>сроков работы</p>
			</li>
			<li class="advantages-item">
				<img
					class="advantages-item__img"
					:src="require('@/assets/images/svg/professionalizm.svg')"
					alt
				/>
				<p class="advantages-item__description"><span class="g-color-orange">Работа без<br></span>посредников</p>
			</li>
		</ul>
	</section>
</template>

<script src="./Advantages.js"></script>

<style lang="less">
@import "../../assets/css/settings.less";
@import "./Advantages.less";
</style>
