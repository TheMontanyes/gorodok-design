<template>
	<header class="header g-section">
		<router-link class="g-link" to="/" exact><img src="@/assets/images/svg/logo.svg" alt="logo" class="logo"></router-link>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__list-item"><router-link class="g-link" to="/" exact>Главная</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" to="#">О нас</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" :to="{name: 'catalog'}">Каталог</router-link></li>
				<li class="nav__list-item"><router-link class="g-link" to="#">Портфолио</router-link></li>
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
