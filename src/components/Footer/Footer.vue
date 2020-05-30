<template>
	<footer class="footer">
		<section class="g-section footer-content">
			<div class="social-group">
				<router-link class="g-link" to="/" exact><img src="@/assets/images/svg/logo-black.svg" alt="logo" class="logo"></router-link>
				<ul class="social-list">
					<li class="social-item"><a href="#"><img src="@/assets/images/svg/vk-icon.svg" alt="vk.com"></a></li>
					<li class="social-item"><a href="#"><img src="@/assets/images/svg/inst-icon.svg" alt="instagram.com"></a></li>
					<li class="social-item"><a href="#"><img src="@/assets/images/svg/youtube-icon.svg" alt="youtube.com"></a></li>
				</ul>
			</div>
			<nav class="nav">
				<ul class="nav__list">
					<li class="nav__list-item"><router-link class="g-link" to="/" exact>Главная</router-link></li>
					<li class="nav__list-item"><router-link class="g-link" to="/about">О нас</router-link></li>
					<li class="nav__list-item"><router-link class="g-link" to="/catalog">Каталог</router-link></li >
					<li class="nav__list-item"><router-link class="g-link" to="/projects">Портфолио</router-link></li>
				</ul>
			</nav>
			<div class="contacts">
				<a href="tel:+79268823399" class="contacts-item g-link g-bold">+7 (926) 882-33-99</a>
				<a href="mailto:ya.dengor@yandex.ru" class="contacts-item g-link email g-bold">ya.dengor@yandex.ru</a>
				<btn :className="['g-link', 'g-btn', 'g-btn-orange', 'contacts-item']" text="Заказать звонок" />
			</div>
		</section>
		<section class="g-section policy">
			<ul class="policy-list">
				<li class="policy-item"><a class="g-link" href="#">Правила и условия</a></li>
				<li class="policy-item"><a class="g-link" href="#">Политика конфиденциальности</a></li>
				<li class="policy-item"><a class="g-link" href="#">Политика использования файлов "cookie"</a></li>
				<li class="policy-item"><a class="g-link" href="#">Уведомление об авторском праве</a></li>
			</ul>
			<p class="policy-copyright">© 2018–2020 «GorodokDesign» Все права защищены.</p>
		</section>
	</footer>
</template>

<script src="./Footer.js"></script>
<style lang="less" scoped>
	@import '../../assets/css/settings.less';
	@import './Footer.less';
</style>
