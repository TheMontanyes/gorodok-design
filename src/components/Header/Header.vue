<template>
	<header class="header">
		<router-link class="g-link" to="/" exact><img src="@/assets/images/svg/logo.svg" alt="logo" class="logo"></router-link>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__list-item"><router-link class="g-link" to="/" exact>Главная</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" to="/about">О нас</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" to="/catalog">Каталог</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" to="/projects">Портфолио</router-link></li>
			</ul>
		</nav>
		<div class="contacts g-bold">
			<a href="tel:+79268823399" class="g-link">+7 (926) 882-33-99</a>
			<a href="mailto:ya.dengor@yandex.ru" class="g-link">ya.dengor@yandex.ru</a>
		</div>
	</header>
</template>

<script src="./Header.js"></script>
<style lang="less">
	@import '../../assets/css/settings.less';
	@import './Header.less';
</style>
