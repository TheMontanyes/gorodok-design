<template>
	<header class="header g-container">
		<img src="@/assets/images/svg/logo.svg" alt="logo" class="logo">
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__list-item" :key="index" v-for="(item, index) in this.menu"><a href="" class="g-link">{{item}}</a></li>
			</ul>
		</nav>
		<div class="contacts g-bold">
			<a href="tel:+79268823399" class="tel g-link">+7 (926) 882-33-99</a>
			<a href="mailto:ya.dengor@yandex.ru" class="email g-link">ya.dengor@yandex.ru</a>
		</div>
	</header>
</template>

<script src="./Header.js"></script>
<style lang="less">
	@import '../../assets/css/settings.less';
	@import './Header.less';
</style>
