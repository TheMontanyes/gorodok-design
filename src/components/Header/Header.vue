<template>
	<header class="header">
		<img src="" alt="" class="logo">
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__list-item" :key="index" v-for="(item, index) in this.menu">{{item}}</li>
			</ul>
		</nav>
		<div class="contacts">
			<a href="tel:+79268823399" class="tel">+7 (926) <span>882-33-99</span></a>
			<a href="mailto:ya.dengor@yandex.ru" class="email">ya.dengor@yandex.ru</a>
		</div>
	</header>
</template>

<script src="./Header.js"></script>
<style lang="less">
	@import './Header.less';
</style>
